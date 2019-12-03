module.exports = {
  siteMetadata: {
    title: "Reece Mercer",
    description: "Personal website"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-137986951-1`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Reece Mercer',
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
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 650,
              quality: 100,
            },
          },
          'gatsby-remark-prismjs',
        ]
      }
    },
  ],
  // note that this Gatsby proxy is only active during development
  proxy: {
    prefix: "/myRepoAPI",
    url: "http://localhost:5000",
  },
}
