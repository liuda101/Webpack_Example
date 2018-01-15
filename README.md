# Webpack Examples

## 深入浅出 Webpack

### 说明
可以直接使用 `require('./xxx.css')` 来引入样式，`Webpack` 也会分析依赖关系。
但是由于 `Webpack` 默认并没有 css 文件的处理器，所以需要添加`css-loader`。

### 疑问
1. 为什么使用 `import('./xxx.css')` 会打包出两个文件来？
