const 
    {series, pipe} = require('gulp');
    //html = require('html'), 
    styles = require('./styles');

module.exports = async function build() {
    console.log('отработал');
    series(styles);
};
