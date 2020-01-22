'use strict';

var gulp       	 = require('gulp');
var browserSync	 = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', gulp.series(function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
}));


gulp.task('default', gulp.series('serve'));