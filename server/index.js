import webpack from 'webpack'
import express from 'express'

import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import webpackConfig from '../build/config/webpack.dev.config'

const compiler = webpack(webpackConfig)
const app = express()

app.use(webpackDevMiddleware(compiler, {
    hot:true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: false
}))

app.use(webpackHotMiddleware(compiler))

const args = ['3001', 'local.easy-hi.com']
export default app.listen(3001, () => console.log('Server is now running at 3001'))
  