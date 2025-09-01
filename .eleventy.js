module.exports = function(eleventyConfig) {
  // ✅ Pass through assets
  eleventyConfig.addPassthroughCopy("public");

  // ✅ Add filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return require("luxon").DateTime.fromJSDate(dateObj).toLocaleString();
  });

  eleventyConfig.addFilter("markdown", (content) => {
    return require("marked")(content);
  });

  // ✅ CORRECT DIR CONFIG
  return {
    dir: {
      input: "src",           // Read from src/
      output: "_site",        // Write to _site/
      includes: "_includes"   // Look for includes in src/_includes/ (relative to input)
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
