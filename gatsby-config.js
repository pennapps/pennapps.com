module.exports = {
  siteMetadata: {
    title: `pennapps.com-redesign`,
    siteUrl: `https://pennapps.com/`,
  },
  pathPrefix: '/pennapps.com-redesign',
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
  ],
}
