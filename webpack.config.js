const path = require('path')

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
        // loader从后往前执行，css-loader 读取 CSS 文件，style-loader 将 CSS 内容注入到 JavaScript 中
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
