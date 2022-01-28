const 
    {series} = require('gulp'),
    clean =require('./gulp-tasks/clean'),
    html = require('./gulp-tasks/html'), 
    styles = require('./gulp-tasks/styles'),
    build =  require('./gulp-tasks/build'),
    serve =  require('./gulp-tasks/serve');

exports.clean = clean;
exports.html = html;
exports.styles = styles;
exports.build = build;
exports.serve = serve;

exports.default = series(clean, serve);