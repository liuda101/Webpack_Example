const path = require('path')

module.exports = {
  // 入口配置
  entry: './main.js',
  // 出口配置
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  }
}
