var config = require('../gulpconfig.json');
var gulp = require('gulp');

var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
module.exports = function(env) {
    var notify = require("gulp-notify");
    var reload = require('browser-sync').reload;
    var rename = require("gulp-rename");

    function swallowError(error) {
        console.log(error.toString());
        this.emit('end');
    }

    gulp.task('less', function() {
        gulp.src(config.less.src)
            .pipe(sourcemaps.init())
            .pipe(less())
            .on('error', swallowError)
            .pipe(minifyCSS())
            .pipe(rename('main.min.css'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.less.dest))
            .pipe(reload({ stream: true }))
            .pipe(notify({
                    title: config.projectTitle,
                    message: config.less.updateMsg.replace("{0}", module.buildStateMsg)
                })
            );
    });
}