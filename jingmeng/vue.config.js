const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

const CompressionPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css', 'html', 'json', 'svg']

module.exports = defineConfig({
  // 需要编译的依赖设置
  transpileDependencies: ['element-ui', 'vue-contextmenujs'],
  // webpack 配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src'),
        '@hooks': path.resolve('src/utils/hooks'),
      },
    },
    entry: {
      app: ['core-js'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          include: [
            resolve('/node_modules/webpack-dev-server/client'),
            resolve('/node_modules/element-ui/src'),
            resolve('/node_modules/element-ui/packages'),
          ],
        },
      ],
    },
  },
  // 提供了一个 webpack 原始配置的上层抽象
  chainWebpack: (config) => {
    config.entry.app = ['core-js', './src/main.js']
    if (process.env.NODE_ENV === 'production') {
      // 配置 gzip
      config.plugin('gzip').use(
        new CompressionPlugin({
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8,
        })
      )
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: [`@import "src/assets/style/index.scss";`].join(''),
      },
    },
  },
  // 代理
  devServer: {
    port: 7777,
    host: '127.0.0.1',
    open: false, //启动服务时自动打开浏览器
    https: false, //开启https
    proxy: {
      '/api': {
        target: 'http://192.168.171.240:81',
        ws: true, //开启websocket
        changeOrigin: true, //允许跨域
        rewrite: (path) => path.replace(/^\/api/, ''), //重写，将/api替换为/
      },
    },
  },
})
