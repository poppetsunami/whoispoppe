import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const rootHtml = await readFile("dist/index.html", "utf8");

const routes = [
  { output: "resume/index.html" },
  {
    output: "research-intelligence/index.html",
    title: "From Research Practice to Intelligence System | Who Is Poppe",
    description: "How Poppe turned fragmented research evidence into a focused, governed AI product strategy for trustworthy project memory.",
    url: "https://whoispoppe.com/research-intelligence/",
  },
];

const replaceMeta = (html, attribute, key, value) => {
  const pattern = new RegExp(`<meta ${attribute}="${key}" content="[^"]*" \\/>`);
  return html.replace(pattern, `<meta ${attribute}="${key}" content="${value}" />`);
};

for (const route of routes) {
  let html = rootHtml;

  if (route.title && route.description && route.url) {
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);
    html = replaceMeta(html, "name", "description", route.description);
    html = html.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${route.url}" />`);
    html = replaceMeta(html, "property", "og:title", route.title);
    html = replaceMeta(html, "property", "og:description", route.description);
    html = replaceMeta(html, "property", "og:url", route.url);
    html = replaceMeta(html, "property", "og:image:alt", "From Research Practice to Intelligence System — Who Is Poppe");
    html = replaceMeta(html, "name", "twitter:title", route.title);
    html = replaceMeta(html, "name", "twitter:description", route.description);
    html = replaceMeta(html, "name", "twitter:image:alt", "From Research Practice to Intelligence System — Who Is Poppe");
  }

  const output = join("dist", route.output);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html);
}
