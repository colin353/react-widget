var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./views/main.js",
  output: {
    path: __dirname + "/web",
    filename: "bundle.js"
  },
  module: {
    loaders: [
        { test: /\.js$/, include: __dirname + "/views", exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
