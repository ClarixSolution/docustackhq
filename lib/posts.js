import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "content");

export function getAllSlugs(type) {
  const dir = path.join(contentDir, type);
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
}

export function getAllItems(type) {
  return getAllSlugs(type).map((slug) => {
    const { data } = matter(fs.readFileSync(path.join(contentDir, type, `${slug}.md`), "utf8"));
    return { slug, ...data };
  }).sort((a, b) => (a.date && b.date ? new Date(b.date) - new Date(a.date) : 0));
}

export async function getItemBySlug(type, slug) {
  const fileContents = fs.readFileSync(path.join(contentDir, type, `${slug}.md`), "utf8");
  const { data, content } = matter(fileContents);
  const contentHtml = (await remark().use(html).process(content)).toString();
  return { slug, contentHtml, ...data };
}
