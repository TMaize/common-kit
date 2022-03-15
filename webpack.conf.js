const { BannerPlugin } = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const package = require('./package.json')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: './kit.min.js',
    library: 'kit',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ]
  },
  plugins: [
    new BannerPlugin({
      banner: 'Version: ' + package.version
    })
  ]
}
