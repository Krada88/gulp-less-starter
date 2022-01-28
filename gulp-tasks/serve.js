const
    {watch, series} = require('gulp'),
    browserSync = require('browser-sync').create(),
    html = require('./html.js');
    styles = require('./styles.js');

module.exports = () => {

    browserSync.init({
        server: {
            baseDir: './public/',
            index: 'index.html',
            notify: true
        }
    });

    watch('./dev/*.html', series(html)).on('change', browserSync.reload);
    watch('./dev/css/*.less', series(styles)).on('change', browserSync.reload);

 }
