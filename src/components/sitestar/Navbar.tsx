import React, { useState } from "react"
import clsx from 'clsx'
import { LangToggle } from '@/components/common/LangToggle';
import HomeIcon from '@/icons/home.svg?react';
import ServiceIcon from '@/icons/service.svg?react';
import AboutIcon from '@/icons/About.svg?react';
import SiteIcon from '@/icons/site.svg?react';
import ContactIcon from '@/icons/contact.svg?react';
import LogoZh from '@/icons/sitestar/logo_zh.svg?react';
import LogoZhHant from '@/icons/sitestar/logo_zh_hant.svg?react';
import LogoEn from '@/icons/sitestar/logo_en.svg?react';

const Menu = ({ showMenu, toggleMenu, menuList }) => {
  return (
    <div className={clsx(
      'text-[#fafafa] z-[-1]',
      'fixed h-screen w-screen bg-[#202934] border-y-60 border-x-48 border-[#181d23] flex flex-col justify-center items-center overflow-hidden',
      'before:content-[""] before:absolute before:w-full before:min-h-screen before:z-[-1]',
      'before:bg-[url("/images/sitestar/Stars.svg?sanitize=true")]',
      'after:content-[""] after:absolute after:w-full after:min-h-screen after:z-[-1]',
      'after:bg-[url("/images/sitestar/Trees.svg?sanitize=true")] after:bg-bottom after:bg-repeat-x',
      showMenu === 'deactive' && 'animate-fade-out',
      showMenu === 'active' && 'animate-fade-in',
    )}>
      <div
        className={clsx(
          'overlay',
          'animate-overflay-slide-out',
          showMenu === 'active' && "absolute right-0 h-[calc(100dvh-120px)] w-[calc(100dvw-120px)] bg-[#fafafa] animate-overlay-slide-in",
        )}
      />
      <div>
        <ul
          className={clsx(
            "list-none text-5xl opacity-0",
            showMenu === 'active' ? 'animate-slide-in' : 'animate-slide-out',
          )}
        >
          {
            menuList.map(it => {
              const Icon = {
                home: HomeIcon,
                about: AboutIcon,
                service: ServiceIcon,
                site: SiteIcon,
                contact: ContactIcon,
              }[it.key]
              return <li className="my-2" key={it.label}>
                <a
                  href={it.href}
                  onClick={toggleMenu}
                  className={clsx(
                    "truncate text-3xl xl:text-5xl pl-2 hover:text-[#f300b4] flex items-center gap-2",
                    "after:content-['»'] after:text-3xl after:text-transparent after:transition-colors after:duration-200 hover:after:text-[#f300b4]"
                  )}
                >
                  <Icon className="fill-current"/>
                  &nbsp;{it.label}
                </a>
              </li>
            })
          }
        </ul>
      </div>
    </div>
  );
};

const Nav = ({ showMenu, toggleMenu, locale }) => {
  const Logo = {
    zh: LogoZh,
    'zh-hant': LogoZhHant,
    en: LogoEn,
  }[locale] || LogoEn;
  return (
    <React.Fragment>
      <nav className={clsx(
        "navbar",
        "fixed z-99 w-full p-4 flex justify-center"
      )}>
        <div className="w-full flex justify-between items-center max-w-[1400px] px-8">
          <a className="h-8 block">
            <Logo className="fill-[#fafafa]" height="100%" width="100%"/>
          </a>
          <div className="flex gap-4">
            <a
              onClick={toggleMenu}
              //className={showMenu === 'active' ? 'menu-button active' : 'menu-button'}
              className={clsx(
                'relative h-[22px] w-[30px] outline-none group'
              )}
            >
              <span className={clsx(
                'group-hover:bg-[#f300b4] bg-[#fafafa] relative block top-1/2 translate-y-[-50%] w-[30px] h-[3px] [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] transition-all duration-[500ms]',
                'group-hover:after:bg-[#f300b4] after:top-[8px] after:content-[""] after:absolute after:w-[30px] after:h-[3px] after:bg-[#fafafa] after:transition-all after:duration-[500ms] after:[transition-timing-function:cubic-bezier(0.77,0,0.175,1)]',
                'group-hover:before:bg-[#f300b4] before:top-[-8px] before:content-[""] before:absolute before:w-[30px] before:h-[3px] before:bg-[#fafafa] before:transition-all before:duration-[500ms] before:[transition-timing-function:cubic-bezier(0.77,0,0.175,1)]',
                showMenu === 'active' && 'bg-transparent group-hover:bg-transparent before:top-0! before:rotate-[-225deg] after:top-0! after:rotate-[225deg]'
              )}/>
            </a>
            <LangToggle className="fill-white scale-130" locale={locale} />
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default function({ className = '', menus, locale }) {
  const [menuState, setMenuState] = useState(false);
  const toggleMenu = () => {
    setMenuState(preState =>
      !preState ? 'active'
        : preState === 'deactive'
        ? 'active'
        : 'deactive'
    )
  }
  return (
    <>
      <Menu toggleMenu={toggleMenu} menuList={menus} showMenu={menuState} />
      <Nav toggleMenu={toggleMenu} showMenu={menuState} locale={locale} />
    </>
  )
}
