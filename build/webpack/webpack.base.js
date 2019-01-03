import paths from './../utils'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import _debug from 'debug'
import VueLoaderPlugin from 'vue-loader/lib/plugin'
import path from 'path'
import pug from 'pug'
const appEntry = paths.src + '/index.js'
const webpackBaseConfig = {
    entry: {
        app: [appEntry, 'webpack-hot-middleware/client'],
        // vendor: ['axios', 'moment', 'qs', 'vue', 'vue-router', 'vuex']
    },
    output: {
        path: paths.dist,
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].js'
    },
    resolve: {
        modules: [
          paths.src,
          path.resolve(paths.src, '../node_modules'),
        ]
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],
            exclude: file => (
                /node_modules/.test(file) &&
                !/\.vue\.js/.test(file)
              )
        }, {
            test: /\.vue$/,
            use: {
                loader: 'vue-loader',
                options: {
                  preserveWhitespace: true,
                },
              }
        }, {
            test: /\.(png|jpe?g|gif)$/,
            use: ['url-loader?limit=10000&name=[name].[hash].[ext]']
        }, {
            test: /\.pug$/,
            oneOf: [
                {
                    resourceQuery: /^\?vue/,
                    use: ['pug-plain-loader']
                },{
                    use: ['raw-loader', 'pug-plain-loader']
                  }
            ]
        }]
    }, 
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            templateContent: pug.renderFile(paths.src + '/index.pug', {
                pretty: true
            }),
            hash: false,
            inject: true,
            minify: {
              collapseWhitespace: false,
              minifyJS: false
            }
          }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }

}

export default webpackBaseConfig