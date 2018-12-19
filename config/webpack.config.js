const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
   
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, '../dist')], {
            root: path.resolve(__dirname, '../'), // 如果dist目录不属于根目录的子目录，则不会清除对应文件夹中的内容
            verbose: true,     // 开启控制台输出信息
            dry: false         // 启用删除文件
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    mode: "production"
}

