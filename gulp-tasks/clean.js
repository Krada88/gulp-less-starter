'use strict';

const 
    gulp = require('gulp'),
    del = require('del');

gulp.task('clean', () =>{
    return del(['./public']);
})