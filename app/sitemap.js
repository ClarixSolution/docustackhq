import { getAllSlugs } from "../lib/posts";
export default function sitemap() {
  const base = "https://docustackhq.com";
  const statics = ["", "/reviews", "/guides", "/about", "/affiliate-disclosure", "/contact"].map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
  const reviews = getAllSlugs("reviews").map((slug) => ({ url: `${base}/reviews/${slug}`, lastModified: new Date() }));
  const guides = getAllSlugs("guides").map((slug) => ({ url: `${base}/guides/${slug}`, lastModified: new Date() }));
  return [...statics, ...reviews, ...guides];
}
