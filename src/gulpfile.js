/// <vs SolutionOpened='serve' />
var gulp = require('gulp');
var karma = require('karma');
var server = karma.server;
var runner = karma.runner;
var notify = require("gulp-notify");
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-minify-css');
var rename = require("gulp-rename");
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var fs = require('fs');
var react = require('gulp-react');
var gulpFilter = require('gulp-filter');
var toES5 = require('gulp-6to5');

var src = {
    css: 'content/css',
    webJs: 'scripts/website/**/*.js',
    webJsx: 'scripts/website/**/*.jsx',
    vendorJs: 'scripts/vendor/**/*.js',
    karmaConfig: 'scripts/test/config/karma.conf.js',
    less: 'content/less/**/*.less',
    mainLess: 'content/less/main.less',
    views: 'views/**/*.cshtml'
};

var dest = {
    css: 'content/css',
    js: 'scripts'
}

function swallowError(error) {
    console.log(error.toString());
    this.emit('end');
}

var env = {
    dev: true,
    prod: false
};

//_________________ JS ___________________//
gulp.task('js', ['js:vendor', 'js:main']);


gulp.task('js:vendor', function () {
    gulp.src(src.vendorJs)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.min.js'))
        .pipe(uglify({ mangle: env.prod }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest.js))
        .pipe(reload({ stream: true }))
        .pipe(notify({ title: 'Gulp: React ES6', message: 'vendor scripts updated' }));
});


gulp.task('js:main', function () {
    var jsxFilter = gulpFilter(['**/*.jsx']);
    gulp.src([src.webJs, src.webJsx])
        .pipe(jsxFilter)
        .pipe(react())
        .pipe(jsxFilter.restore())
        .pipe(sourcemaps.init())
        .pipe(toES5())
        .pipe(concat('main.min.js'))
        .on('error', swallowError)
        .pipe(uglify({ mangle: env.prod }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest.js))
        .pipe(reload({ stream: true }))
        .pipe(notify({ title: 'Gulp: React ES6', message: 'website scripts updated' }));
});

//________________ KARMA _________________//
gulp.task('karma:start', function (done) {
    server.start({
        configFile: __dirname + '/' + src.karmaConfig
    }, done);
});

//_________________ LESS _________________//
gulp.task('less', function () {
    gulp.src(src.mainLess)
        .pipe(sourcemaps.init())
        .pipe(less())
        .on('error', swallowError)
        .pipe(minifyCSS())
        .pipe(rename('main.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest.css))
        .pipe(reload({ stream: true }))
        .pipe(notify({ title: 'Gulp: React ES6', message: 'css updated' }));
});

//_____________ BROWSER SYNC _____________//
gulp.task('browser-sync', function () {
    browserSync({
        proxy: "local.reactes6"
    });
});

//_____________ VIEWS ___________________//
gulp.task('views:updated', function () {
    gulp.src(src.views)
        .pipe(reload({ stream: true }))
        .pipe(notify({ title: 'Gulp: React ES6', message: 'views updated' }));
});

//----------------------------------------//
gulp.task('serve', ['less', 'js', 'browser-sync'], function () {
    gulp.watch(src.less, ['less']);
    gulp.watch(src.vendorJs, ['js:vendor']);
    gulp.watch([src.webJs, src.webJsx], ['js:main']);
    gulp.watch(src.views, ['views:updated']);
});

gulp.task('default', ['serve']);