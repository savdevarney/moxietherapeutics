module.exports = {
  siteMetadata: {
    title: "moxie",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "moxietherapeutics",
        accessToken: "",
      },
    },
    "gatsby-plugin-sass",
  ],
};
