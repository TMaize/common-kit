module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: './kit.min.js',
    library: 'kit',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  }
}
