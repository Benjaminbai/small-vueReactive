const path = require('path')

module.exports = {
    entry: './src/index',
    output: {
        publicPath: 'dist',
        filename: 'boundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: 'public',
    }
}