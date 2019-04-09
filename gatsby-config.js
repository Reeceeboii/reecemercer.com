
module.exports = {
  siteMetadata: {
    title: "Reece Mercer",
    description: "Personal website"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'Reece Mercer',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-favicon',
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            path: `${__dirname}/src/blog_posts`,
            name: 'blog_posts'
        }
    },
    'gatsby-transformer-remark'
  ],
  // note that this Gatsby proxy is only active during development
  proxy: {
    prefix: "/myRepoAPI",
    url: "http://localhost:5000",
  },
}
