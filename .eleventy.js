const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  let options = {
    html: true,
    breaks: false,
    linkify: true,
  };

  const md = markdownIt(options)
    .use(require('markdown-it-footnote'))
    .use(require("markdown-it-anchor"))
    .use(require("markdown-it-smartarrows"))
    ;

  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addPassthroughCopy("site.css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("files");
};
