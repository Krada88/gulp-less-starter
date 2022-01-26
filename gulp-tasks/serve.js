
const
    gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    html = require('./html');
    styles = require('./styles');

module.exports = function serve(cb){

    browserSync.init({
        server: {
            baseDir: './public',
            notify: true,
            // open: true,
            // cors: true
        }
    });

//     return  gulp.watch('../dev/**/*.less', () => {
//         return gulp.series('styles');
//     });

    gulp.watch('./dev/*.html', gulp.series(html)).on('change', browserSync.reload);
    gulp.watch('./dev/**/*.less', gulp.series(styles)).on('change', browserSync.reload);

    return cb()
 }
