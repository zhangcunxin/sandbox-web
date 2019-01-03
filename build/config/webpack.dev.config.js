import merge from 'webpack-merge'
import webpackBaseConfig from './../webpack/webpack.base'
import paths from './../utils'
import webpack from 'webpack'

export default merge(webpackBaseConfig, {
    mode: "development",
    devtool: 'inline-source-map',
    output: {
        path: paths.dist,
        publicPath: '',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
})