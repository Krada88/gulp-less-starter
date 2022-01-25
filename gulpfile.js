'use strict';

const 
    gulp = require('gulp'),
    notify = require('gulp-notify'),
    requireDir = require('require-dir');

requireDir('./gulp-tasks/');

// gulp.task('watch', () => {
//     notify('проверка')
//     gulp.watch('./dev/**/*.less', gulp.parallel(['styles']))
// }) 

gulp.task('default', gulp.series(['clean', 'server', 'watch']));