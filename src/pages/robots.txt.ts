import type { APIRoute } from 'astro';

const darkVisitors = await fetch("https://api.darkvisitors.com/robots-txts", {
    method: "POST",
    headers: {
        "Authorization": "Bearer " + import.meta.env.darkvisitors_token,
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        agent_types: [
            "AI Data Scraper",
            "Undocumented AI Agent"
        ],
        disallow: "/"
    })
}).then((response) =>
    response.text()
);

const getRobotsTxt = (sitemapURL: URL, darkVisitors: string) => `
${darkVisitors}

User-agent: *
Disallow:

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
    const sitemapURL = new URL('sitemap-index.xml', site);
    return new Response(getRobotsTxt(sitemapURL, darkVisitors));
};
