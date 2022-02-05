const {src, dest} = require('gulp');

module.exports = async (cb) => {
    src('./dev/*.html')
        .pipe(dest('./public'));
    cb();
};

