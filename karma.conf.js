module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/sinonjs/sinon.js',
      'bower_components/jasmine-sinon/lib/jasmine-sinon.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-ui-mask/dist/mask.js',
      'app/scripts/config.js',
      'app/scripts/app.js',
  
      'app/scripts/controllers/*.js',
      'app/scripts/services/*.js',
      'test/spec/controllers/main.js',
      'test/spec/services/main.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}