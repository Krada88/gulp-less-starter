const 
    {src, dest} = require('gulp'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano');

module.exports = async(cb) => {
    src('./dev/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(concatCss('style.css'))
        .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(rename((path) => {
            path.basename += '.min'
            path.extname = '.css';
        }))
        .pipe(dest('./public/css/'));
    cb();    
}
