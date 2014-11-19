/// <vs SolutionOpened='serve' />
var gulp = require('gulp');

var config = require('./gulpconfig.json');

var env = {
    production: false,
    development: true,
    buildStateMsg: "initial build"
}

require('./gulp/_browserify.js')(env);
require('./gulp/_browsersync.js')(env);
require('./gulp/_js.js')(env);
require('./gulp/_karma.js')(env);
require('./gulp/_less.js')(env);
require('./gulp/_views.js')(env);

gulp.task('serve', ['less', 'browserify', 'browser-sync'], function () {
    gulp.watch(config.less.watchFiles, ['less']);
    gulp.watch(config.browserify.watchFiles, ['browserify']);
    gulp.watch(config.views.watchFiles, ['views:updated']);

    env.buildStateMsg = "updated";
});

gulp.task('default', ['serve']);