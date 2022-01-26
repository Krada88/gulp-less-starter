'use strict';

const 
    gulp = require('gulp'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename');

module.exports = function styles(){
    return gulp.src('./dev/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(rename((path) => {
            path.basename += '.min'
            path.extname = '.css';
        }))
        .pipe(gulp.dest('./public/css/'))
}
