const 
    {series} = require('gulp'),
    clean =require('./gulp-tasks/clean'),
    html = require('./gulp-tasks/html'), 
    styles = require('./gulp-tasks/styles'),
    //webp =  require('./gulp-tasks/webp'),
    serve =  require('./gulp-tasks/serve'),
    build = series(clean, html, styles),
    runServe = series(build, serve);


exports.clean = clean;
exports.html = html;
exports.styles = styles;
//exports.webp =
exports.build = build;
exports.serve = serve;

exports.default = runServe;