/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';
const resolve = (dir) => path.join(__dirname, dir);
// import autoprefixer from "autoprefixer";
// import pxtorem from "postcss-pxtorem";
const pxtorem = require('postcss-pxtorem');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const autoprefixer = require('autoprefixer');

module.exports = {
  // 扩展webpack配置
  configureWebpack: (config) => {
    // do sth...
  },

  // 对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('@c', resolve('./src/components'))
      .set('@scss', resolve('./src/styles'))
      .set('common', resolve('./src/common'));
    // 自动加载模块，而不必到处 import 或 require
    config.plugin('provide').use(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
      }),
    );
  },
  css: {
    sourceMap: isDev,
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 16,
            propList: ['*'],
          }),
        ],
      },
    },
  },
};
