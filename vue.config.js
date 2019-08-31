const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'Butterfly.CMS',
    themeColor: '#1786DB',
    msTileColor: '#1786DB',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#1786DB'
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
