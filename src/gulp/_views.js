module.exports = function(env) {
    var config = require('../gulpconfig.json');
    var gulp = require('gulp');

    var notify = require("gulp-notify");
    var reload = require('browser-sync').reload;

    gulp.task('views:updated', function() {
        gulp.src(config.views.src)
            .pipe(reload({ stream: true }))
            .pipe(notify({
                    title: config.projectTitle,
                    message: config.less.updateMsg.replace("{0}", module.buildStateMsg)
                })
            );
    });
}