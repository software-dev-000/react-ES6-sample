module.exports = function(env) {
    var config = require('../gulpconfig.json');
    var gulp = require('gulp');

    var server = require('karma').server;
//var runner = require('karma').runner;

    gulp.task('karma:start', function(done) {
        server.start({
            configFile: __dirname + '/' + config.karma.configFile
        }, done);
    });
}