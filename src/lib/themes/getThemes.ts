import { getCollection } from "astro:content";

export default async function() {
  const themes = await getCollection("themes");
  return themes.map(it => it.data).sort((a, b) => {
    if (a.name === 'designphotographyportfolio') return -1;
    if (b.name === 'designphotographyportfolio') return 1;
    if (a.github?.full_name === 'withastro/astro') return 1;
    if (b.github?.full_name === 'withastro/astro') return -1;
    if (a.github && b.github) return b.github.stargazers_count - a.github.stargazers_count;
    if (a.github) return -1;
    return 1;
  });
}
