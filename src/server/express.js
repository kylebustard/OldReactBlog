import express from "express"
import path from "path"

const server = express()

const webpack = require("webpack")
const config = require("../../config/webpack.dev.js")
const compiler = webpack(config)

const webpackDevMiddleware = 
require("webpack-dev-middleware")(
  compiler, 
  config.devServer
)

const webpackHotMiddleware = 
require("webpack-hot-middleware")(
  compiler,
  config.devServer
)

server.use(webpackDevMiddleware)
server.use(webpackHotMiddleware)
console.log("Middleware enabled")

const staticMiddleware = express.static("dist")
server.use(staticMiddleware)

server.listen(8080, () => {
  console.log("Server is listening")
})