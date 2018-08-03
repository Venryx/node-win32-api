const base = require('./karma.base.conf.js')

module.exports = (config) => {
  config.set(Object.assign(base, {
    frameworks: base.frameworks.concat([
      'detectBrowsers',
    ]),

    detectBrowsers: {
      // enable/disable phantomjs support, default is true
      usePhantomJS: false,
    },

    reporters: base.reporters.concat([
      'dots',
    ]),

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['Chrome', 'Firefox', 'IE'],

  }))
}
