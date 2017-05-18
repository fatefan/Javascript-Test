const path = require('path');
module.exports = {
    entry: './index.js',
    output: {
        filename: './bundle.js'
    },
    devServer: {
        publicPath: '/',
        port: 9000,
        overlay: true,
        open: true
    }
}