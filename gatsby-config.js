/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes/`,
      },
    }
  ],
  siteMetadata: {
    title: "Cade Rosche Gatsby Practice",
    owner: "Cade Rosche",
    version: "1.0.1"
  }
}
