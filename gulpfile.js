const 
    {series} = require('gulp'),
    clean =require('./gulp-tasks/clean'),
    html = require('./gulp-tasks/html'), 
    fonts = require('./gulp-tasks/fonts'),
    styles = require('./gulp-tasks/styles'),

    //webp =  require('./gulp-tasks/webp'),
    serve =  require('./gulp-tasks/serve'),
    build = series(clean, html, fonts, styles),
    runServe = series(build, serve);


exports.clean = clean;
exports.html = html;
exports.fonts = fonts;
exports.styles = styles;
//exports.webp =
exports.build = build;
exports.serve = serve;

exports.default = runServe;