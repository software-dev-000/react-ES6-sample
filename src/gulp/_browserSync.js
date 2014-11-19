module.exports = function(env) {
    var config = require('../gulpconfig.json');
    var gulp = require('gulp');

    var browserSync = require('browser-sync');

    gulp.task('browser-sync', function() {
        browserSync({ proxy: "local.reactes6" });
    });
}