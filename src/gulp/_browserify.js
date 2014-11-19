module.exports = function (env) {

    var config = require('../gulpconfig.json');
    var gulp = require('gulp');

    var browserify = require('browserify');
    var source = require('vinyl-source-stream');
    var notify = require("gulp-notify");
    var reload = require('browser-sync').reload;

    function swallowError(error) {
        console.log(error.toString());
        this.emit('end');
    }

    gulp.task('browserify', ['js'], function () {
        return browserify(config.browserify.src, { debug: true })
            .on('error', swallowError)
            .bundle()
            .on('error', swallowError)
            .pipe(source('web-bundle.js'))
            .pipe(gulp.dest(config.browserify.dest))
            .pipe(reload({ stream: true }))
            .pipe(notify({
                title: config.projectTitle,
                message: config.browserify.updateMsg.replace("{0}", env.buildStateMsg)
            })
        );
    });
}