module.exports = {
  siteMetadata: {
    title: `Meet Andy Full-Stack Web Developer`,
    description: `smart passionate techie looking to start his career, certified full stack web developer,versed in serverless wordpress shopify gatsby front End front-end back end back-end wordpress seo shopify aws netlify ecommerce`,
    author: `Andy Geertz`,
    siteUrl: `https://andyswebdesign.net`,
    image:'./src/images/gatsbyPortfolio.jpeg'
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
        short_name: `AndyWeb`,
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
