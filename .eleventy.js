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

  // ✅ SET CORRECT DIRECTORIES
  return {
    dir: {
      input: "src",           // ← This tells Eleventy: "Start in src/"
      output: "_site",        // Output to _site/
      includes: "_includes"   // But: "_includes" is RELATIVE TO input
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
