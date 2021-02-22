module.exports = {
  siteMetadata: {
    title: `Meet Andy Full-Stack Web Developer`,
    description: `full-stack protfolio`,
    author: `GeertzA`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-use-dark-mode',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "GraphCMS",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "graphcms",
        // Url to query from
        url: "https://api-us-west-2.graphcms.com/v2/cklcatie7xqlx01yyh5go2epz/master",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
