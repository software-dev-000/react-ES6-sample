module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS', 'Chrome', 'Firefox', 'IE', 'html'],
        frameworks: ['jasmine'],
        files: [
            '../../vendor.min.js',
            '../../main.min.js',
            '../../vendor/angularJs/angular-mocks.js',
            '../**/*.spec.js'
        ],
        reporters: ['progress', 'growl'],
        plugins: [
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ie-launcher',
            'karma-growl-reporter',
            'karma-jasmine'
        ]
    });
};