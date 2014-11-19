var config = require('../gulpconfig.json');
var gulp = require('gulp');

module.exports = function(env) {
    var rimraf = require('rimraf');
    var to5 = require('gulp-6to5');
    var _ = require('lodash');
    var react = require('gulp-react');
    var rename = require("gulp-rename");

    function swallowError(error) {
        console.log(error.toString());
        this.emit('end');
    }

    gulp.task('clean:lib', function(callback) {
        rimraf('./js/lib', callback);
    });

    gulp.task('js', function() {

        _.each(config.js.src, function(src, index) {
            gulp.src(src)
                .pipe(react()).on('error', swallowError)
                .pipe(to5()).on('error', swallowError)
                .pipe(rename(function(path) {
                    path.extname = ".js";
                }))
                .pipe(gulp.dest(config.js.dest[index]));
        });
    });
}