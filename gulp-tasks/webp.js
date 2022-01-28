const 
    {src, dest} = require('gulp'),
    webp = require('gulp-webp'),
    imagemin = require('imagemin'),
    imageminWebp = require('imagemin-webp');

module.exports = async function webp(){

    // return src('./dev/pictures/src/**/*.{jpg, png]')
    //     .pipe(webp())
    //     .pipe(dest('./public'));

    imagemin(['./dev/pictures/*.{jpg,png}'], {
		destination: './public',
		plugins: [
			imageminWebp({quality: 80})
		]
	});

}