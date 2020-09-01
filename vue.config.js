/* eslint-disable @typescript-eslint/no-var-requires */
const isDev = process.env.NODE_ENV === 'development';
// import autoprefixer from "autoprefixer";
// import pxtorem from "postcss-pxtorem";
const pxtorem = require('postcss-pxtorem');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const autoprefixer = require('autoprefixer');

module.exports = {
  css: {
    sourceMap: isDev,
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 100,
            propList: ['*'],
          }),
        ],
      },
    },
  },
};
