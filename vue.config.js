/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const isDev = process.env.NODE_ENV === 'development';
const isPro = process.env.NODE_ENV === 'production';
const resolve = (dir) => path.join(__dirname, dir);
const pxtorem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');

module.exports = {
  /**
   * 构建生产包时关闭源码地图
   */
  productionSourceMap: isPro ? false : true,
  /**
   * 扩展webpack配置
   */
  configureWebpack: (config) => {
    // 拆除外部模块，不让webpack打包这些选项，然后再以cnd的形式引入这些模块,可减小打包后的体积
    const externals = {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios',
      jquery: '$',
    };

    // config.externals = externals;

    const js = [
      'https://cdn.bootcdn.net/ajax/libs/vue/0.10.0/vue.js',
      'https://cdn.bootcdn.net/ajax/libs/vuex/0.4.1/vuex.js',
      'https://cdn.bootcdn.net/ajax/libs/vue-router/0.4.0/vue-router.js',
      'https://cdn.bootcdn.net/ajax/libs/axios/0.1.0/axios.js',
      'https://cdn.bootcdn.net/ajax/libs/jquery/1.10.0/jquery.js',
    ];

    const tags = new HtmlWebpackIncludeAssetsPlugin({
      assets: [...js],
      append: false, // false代表前置资源
    });

    // config.plugins.push(tags);
  },

  /**
   * 对内部的 webpack 配置进行更细粒度的修改。
   */
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
