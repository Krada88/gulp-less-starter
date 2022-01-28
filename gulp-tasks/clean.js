const del = require('del');

module.exports = async () => {
    await del('./public');
}
