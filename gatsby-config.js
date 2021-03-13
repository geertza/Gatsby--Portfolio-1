module.exports = {
  siteMetadata: {
    title: `Meet Andy Full-Stack Web Developer`,
    description: `full-stack protfolio`,
    author: `GeertzA`,
    siteUrl: `https://andyswebdesign.net`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-robots-txt',
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -80,
        duration: 2000
      }
    },
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
   
    `gatsby-plugin-purgecss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andys Web Design`,
        short_name: `Andy`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/phoenix.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
