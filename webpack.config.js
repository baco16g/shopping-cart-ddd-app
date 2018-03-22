module.exports = {
  devtool: 'source-map',
  entry: require('./webpack/webpack.entry'),
  output: require('./webpack/webpack.output'),
  module: require('./webpack/webpack.module'),
  resolve: require('./webpack/webpack.resolve'),
  optimization: require('./webpack/webpack.optimization'),
  plugins: require('./webpack/webpack.plugins')
}
