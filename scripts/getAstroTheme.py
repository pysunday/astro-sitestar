# coding: utf-8
import os
import json
import requests
import datetime
from datetime import datetime
from urllib.parse import urlparse
import pprint
from bs4 import BeautifulSoup
from sunday.core import enver, getParser, MultiThread
from pydash import pick


CMDINFO = {
    "version": '0.0.1',
    "description": "命令行工具",
    "epilog": "",
    'params': {
        'DEFAULT': [
            {
                'name': ['-p', '--page'],
                'help': '总页数',
                'dest': 'totalPage',
                'type': int,
                'required': True,
            },
            {
                'name': ['-t', '--thread'],
                'help': '线程数',
                'dest': 'threadNum',
                'type': int,
                'default': 6,
            },
        ],
    }
}

class AstroTheme():
    def __init__(self, totalPage=0, threadNum=0, *args, **kwargs):
        self.totalPage = totalPage
        self.baseUrl = 'https://astro.build'
        self.url = self.baseUrl + '/themes/%s/?search='
        self.threadNum = threadNum
        self.urls = []
        self.themeDir = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '../src/data/themes/'))
        self.headers = {
            "Authorization": "token %s" % enver('../.env.production')[0]('github_token'),
            "Accept": "application/vnd.github.v3+json",
        }

    def github_to_api_url(self, github_url, themeUrl):
        parsed = urlparse(github_url)
        path_parts = parsed.path.strip("/").split("/")
        if len(path_parts) >= 2:
            owner, repo = path_parts[0], path_parts[1]
            tarUrl = f"https://api.github.com/repos/{owner}/{repo}"
            res = requests.get(tarUrl, headers=self.headers).json()
            if 'status' in res and res['status'] == '404': raise Exception(f'主题{themeUrl}的github地址{github_url}不存在')
            if 'name' not in res:
                print('github:')
                print(themeUrl)
                print(github_url)
                print(res)
            return pick(res,
                        'html_url', 'name', 'full_name', 'description', 'stargazers_count',
                        'created_at', 'updated_at', 'pushed_at',
                        'git_url', 'ssh_url', 'clone_url', 'homepage')
        raise Exception(f'主题{themeUrl}的github地址{github_url}不正确')

    def getUrl(self, items, idx=None, update=None, *_):
        for pageNum in items:
            res = requests.get(self.url % pageNum)
            soup = BeautifulSoup(res.text, 'lxml')
            articles = soup.select('#main article')
            self.urls.extend([self.baseUrl + article.select_one('a').attrs['href'] for article in articles])
            update and update()

    def getDetail(self, items, idx=None, update=None, *_):
        for url in items:
            name = url.strip('/').split('/').pop()
            try:
                data = {
                    'url': url,
                    'name': name,
                    'update_time': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                }
                res = requests.get(url)
                soup = BeautifulSoup(res.text, 'lxml')
                section = soup.select_one('#main section')
                if not section: return
                data['title'] = section.select_one('div > h1').text
                data['desc'] = section.select_one('div > p').text
                data['article'] = ''.join([str(it) for it in section.select_one('article').contents])
                aside = soup.select_one('#main aside')
                btns = aside.select('div>a')
                data['typeUrl'] = btns[0].attrs['href']
                data['liveUrl'] = btns[1].attrs['href']
                if btns[0].text.strip() == 'Get started':
                    data['type'] = 'free'
                    if 'github.com' in data['typeUrl']:
                        data['github'] = self.github_to_api_url(data['typeUrl'].removesuffix(".git"), url)
                elif btns[0].text.strip() == 'Buy now':
                    data['type'] = 'buy'
                else:
                    print(f'{url} 既非开源也非收费!')
                    update and update()
                    continue
                nav = soup.select_one('#main image-gallery > nav')
                data['imgs'] = [self.baseUrl + img.attrs['src'] for img in nav.select('img')] if nav else [self.baseUrl + soup.select_one('#main img').attrs['src']]
                tarPath = os.path.join(self.themeDir, name + '.json')
                with open(tarPath, 'w', encoding='utf-8') as f:
                    json.dump(data, f, indent=4, ensure_ascii=False)
            except Exception as e:
                print('astro:')
                print(name)
                print(url)
                print(e)
            update and update()

    def checkLocal(self, urls):
        tars = []
        for url in urls:
            name = url.strip('/').split('/').pop()
            tar = os.path.join(self.themeDir, name + '.json')
            if os.path.exists(tar): continue
            tars.append(url)
        print('共%d个，存在文件%d个，还需要处理%d个' % (len(urls), len(urls) - len(tars), len(tars)))
        return tars

    def getData(self, isTest = False):
        if not isTest:
            MultiThread(list(range(1, self.totalPage + 1)), lambda *args: [self.getUrl, args], self.threadNum).start(isBar=True)
            MultiThread(self.checkLocal(self.urls), lambda *args: [self.getDetail, args], self.threadNum).start(isBar=True)
        else:
            # self.getDetail(self.checkLocal(['https://astro.build/themes/details/neon-mint/', 'https://astro.build/themes/details/astro-themes-all-access-pass/']))
            self.getDetail(['https://astro.build/themes/details/b2b-saas-kit/'])
            # self.getDetail(self.checkLocal(self.urls))

    def console(self, data):
        # pprint.pprint(data)
        pass

    def run(self, isCmd=False):
        ans = self.getData()
        if isCmd:
            self.console(ans)
        else:
            return ans


def runcmd():
    parser = getParser(**CMDINFO)
    handle = parser.parse_args(namespace=AstroTheme())
    handle.run(True)

if __name__ == "__main__":
    runcmd()

