// api文件
const isDev = process.env.NODE_ENV === 'development';
const url = isDev ? 'https: //path1' : 'https://path2';

export default {
  test: {
    index: `${url}/test/index`,
  },
};
