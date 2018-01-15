const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  // 入口配置
  entry: './main.js',
  // 出口配置
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        // 根据后缀匹配 css 文件，使用 Loader 转换
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract({
          use: ['css-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: `[name]_[contenthash:8].css`
    })
  ]
}
