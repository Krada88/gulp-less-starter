const del = require('del');
const { clean } = require('../gulpfile');

module.exports = async(cb) => {
    del('./public');
    cb();
}
