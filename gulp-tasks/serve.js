const
    {watch, series} = require('gulp'),
    browserSync = require('browser-sync').create(),
    html = require('./html.js');
    styles = require('./styles.js');

module.exports = function serve(cb){

    browserSync.init({
        server: {
            baseDir: './public',
            notify: true
        }
    });

    watch('./dev/*.html', series(html)).on('change', browserSync.reload);
    watch('./dev/**/*.less', series(styles)).on('change', browserSync.reload);

    return cb()
 }
