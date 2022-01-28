const {src, dest} = require('gulp');

module.exports = async () => {
    return src('./dev/*.html')
        .pipe(dest('./public'))
};

