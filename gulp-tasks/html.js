'use strict'

const
    gulp = require('gulp');
    
gulp.task('html', () => {
    return gulp.src('./dev/*.html')
        .pipe(gulp.dest('./public'));
});    