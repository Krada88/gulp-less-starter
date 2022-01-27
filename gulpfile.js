'use strict';

const gulp = require('gulp');

exports.clean = require('./gulp-tasks/clean');
exports.html = require('./gulp-tasks/html');
exports.serve = require('./gulp-tasks/serve');
exports.styles = require('./gulp-tasks/styles');

// gulp.task('watch', () => {
//     notify('проверка')
//     gulp.watch('./dev/**/*.less', gulp.parallel(['styles']))
// }) 

//gulp.task('default', gulp.series(['clean', 'server', 'watch']));