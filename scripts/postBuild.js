const fs = require("fs");
const getPathsObject = require("./getPathsObject");
const formatDate = require("./formatDate");

// ROBOTS.txt
const robotsTxt = `User-agent: *
Sitemap: https://embiem.me/sitemap_local.xml
Disallow:`;

fs.writeFileSync("static/robots.txt", robotsTxt);
console.log("robots.txt saved!");

// SITEMAP.XML
const pathsObj = getPathsObject();
const today = formatDate(new Date());
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${Object.keys(pathsObj)
    .map(
      path => `<url>
    <loc>https://arcsoftwaredevelopment.com${path}</loc>
    <lastmod>${
      pathsObj[path].lastModified
        ? formatDate(new Date(pathsObj[path].lastModified))
        : today
    }</lastmod>
  </url>`
    )
    .join("")}
</urlset>`;

fs.writeFileSync("static/sitemap_local.xml", sitemapXml);
console.log("sitemap_local.xml saved!");
