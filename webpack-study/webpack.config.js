const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        contentBase: 'src'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.css$/, 
            use: ['style-loader','css-loader']
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }
        ]
    }
}