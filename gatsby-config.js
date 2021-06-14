module.exports = {
  siteMetadata: {
    title: "Pandora",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Chilanka', 'Droid Serif']
        }
      }
    },
    "gatsby-plugin-styled-components", "gatsby-plugin-gatsby-cloud"],
};
