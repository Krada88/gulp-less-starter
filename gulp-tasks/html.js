const gulp = require('gulp');

module.exports = async function html() {
    gulp.src('./dev/*.html')
        .pipe(gulp.dest('./public'))
};
