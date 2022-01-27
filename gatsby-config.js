module.exports = {
  siteMetadata: {
      title: "Personal site",
    siteUrl: "https://www.yourdomain.tld"
  },
  plugins: [
    "gatsby-transformer-json",  // To read json data
    "gatsby-plugin-mdx",        // To parse markup files in the mdx format
    "gatsby-plugin-image",      // To use images not in the static way
    "gatsby-plugin-sharp",      // I do not know exactly
    // File system to load blog entries
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      }
    },
    // File system to load various data
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/data`,
      }
    },
    // Fonts
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Open Sans",
          "source sans pro\:300,400,400i,700" // you can also specify font weights and styles
        ],
        display: "swap"
      }
    },
  ]
};