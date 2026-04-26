import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "./i18n";

const EN_PREFIX = "en/";

function byLang(lang: Lang, id: string) {
  return lang === "es" ? !id.startsWith(EN_PREFIX) : id.startsWith(EN_PREFIX);
}

export async function getProjectsByLang(lang: Lang) {
  const projects = await getCollection("projects", ({ id }) => byLang(lang, id));
  return [...projects].sort((a, b) => a.data.title.localeCompare(b.data.title));
}

export function getFeaturedProject(
  projects: CollectionEntry<"projects">[],
  slug: string,
) {
  return projects.find((project) => {
    const normalized = project.slug.replace(/^en\//, "");
    return normalized === slug;
  });
}
