const config = require('./config');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-academic',
      options: {
        contentPath: 'content',
        googleAnalyticTrackingId: 'G-JYKB2S6T6N',
        defaultLanguage: 'en',
        pages: config.pages,
        tagColors: config.tagColors,
        author: config.author,
        icon: './static/favicon.png',
      },
    },
  ],
  siteMetadata: config,
  pathPrefix: config.pathPrefix,
};
