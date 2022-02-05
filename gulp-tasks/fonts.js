const 
    {src, dest} = require('gulp');
    //fonter = require('gulp-fonter');

const concat   = require('gulp-concat');
const font= require('gulp-font2css').default;
 
module.exports = async(cb) => {
    // src('./dev/fonts/*')
    // .pipe(fonter({
    //     formats: ['ttf', 'eot', 'woff', 'svg']
    //   }))
    // .pipe(dest('./public/fonts/'));

    src('./dev/fonts/*.{otf,ttf,woff,woff2}')
        .pipe(font())
        .pipe(concat('fonts.less'))
        .pipe(dest('./dev/css/'));

    cb();
}