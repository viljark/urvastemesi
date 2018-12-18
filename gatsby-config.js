module.exports = {
  siteMetadata: {
    title: 'Mee ja mesilasperede müük',
    siteUrl: `https://urvastemesi.ee`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/_schema", "/_schema/*", `/submitForm`],
      }
    },
    {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
        // Path to your Netlify CMS config file
        cmsConfig: `/static/admin/config.yml`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'media',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1024,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-78484621-4",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
