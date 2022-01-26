const del = require('del');

module.exports = async function clean() {
    await del('./public');
};
