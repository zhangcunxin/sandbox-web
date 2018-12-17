const path = require('path')
console.log(__dirname)
module.exports = {
    entry: '../src/index.js',
    output: {
        fileName: 'index.js',
        path:  path.resolve(__dirname + '/', '../dist')
    }
}