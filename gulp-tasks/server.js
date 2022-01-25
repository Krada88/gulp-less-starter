'use strict';

const
    gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: './public',
            notify: true
        }
    });

    gulp.watch('../dev/**/*.less', () => {
        return gulp.series('styles');
    });
    
});