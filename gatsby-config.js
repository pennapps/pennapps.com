module.exports = {
  siteMetadata: {
    title: `pennapps.com`,
    siteUrl: `https://pennapps.com/`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /\.svg$/,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/favicon.svg',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-cname`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
