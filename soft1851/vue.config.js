// 服务器自动打开，指定端口，热加载

module.exports = {
  devServer: {
    host: 'localhost',
    port: 8000,
    https: false,
    open: true,
    hotOnly: true
  },
  //项目打包的输出目录，相对于当前项目根路径
  outputDir: './dist',
  //项目打包后的资源目录，相对于dist路径
  assetsDir: './assets/',
  //打包后的入口页面index.html，要引用资源的时候，正确方式是./assets/css/style.css，加上统一的./前缀
  publicPath: './',
  //入口页面index.html，相对于dist的路径
  indexPath: './index.html'
}
