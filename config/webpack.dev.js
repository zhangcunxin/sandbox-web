const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
const webpack = require('webpack')

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})