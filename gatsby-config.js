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
    `gatsby-plugin-cname`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}
