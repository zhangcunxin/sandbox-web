const express = require('express')
const webpack = require('webpack')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')


const app = express()
const config = require('./../config/webpack.dev')
const compiler = webpack(config)

app.use(WebpackDevMiddleware(compiler, {
    noInfo: false,
    hot: true,
    publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.listen(3000, function() {
    console.log('this app is listening on port 3000 \n')
})