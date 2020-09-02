import axios, { AxiosError, AxiosResponse, AxiosRequestConfig, AxiosPromise } from 'axios';

import { Message } from 'element-ui';

interface Request {
  <T = any>(url: string, param?: object, custom?: AxiosRequestConfig): AxiosPromise<T>;
}

const errorMessage = (message: string) => {
  Message({ type: 'error', message, duration: 2000 });
};

const getToken = (): string => {
  return 'eskgilrmndig';
};

const Token = (): object => {
  const Authorization = getToken() || null;
  return Authorization ? { Authorization: `token ${Authorization}` } : {};
};

const successResponse = (res: AxiosResponse) => {
  const { errcode, errmsg } = res.data;

  if (errcode !== '0000' && errmsg) errorMessage(errmsg);

  return res;
};

const errorResponse = (err: AxiosError) => {
  let errMsg = '链接到服务器失败';
  if (err && err.response) {
    const { status } = err.response;
    switch (status) {
      case 400:
        errMsg = '错误请求';
        break;
      case 401:
        errMsg = '权限不足/令牌过期';
        break;
      default:
        errMsg = `连接错误${status}`;
    }
    if (status === 401) {
      // 验证过期，跳转到登录页面
    }
    errorMessage(errMsg);

    return Promise.reject(err);
  }
};

// 请求等待时长
axios.defaults.timeout = 12000;

// 默认请求头，设置为异步请求
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
};

// 请求拦截
axios.interceptors.request.use(req => {
  const config = req;
  const { headers } = config;
  if (!headers.scid) {
    headers.scid = 'xxx';
  }
  if (headers.Authorization === null) {
    return config;
  }
  const token = Token();
  if (!Object.keys(token).length) {
    delete headers.Authorization;
  } else {
    Object.assign(headers, token);
  }
  config.headers = headers;
  return config;
});

// 相应拦截
axios.interceptors.response.use(successResponse, errorResponse);

const get: Request = (url, param = {}, custom = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: param, ...custom })
      .then((res: AxiosResponse) => {
        if (res.data.errcode === '0000') {
          resolve(res);
        } else {
          reject(res);
        }
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};

const post: Request = (url, param = {}, custom = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, { param, custom })
      .then((res: AxiosResponse) => {
        if (res.data.errcode === '0000') {
          resolve(res);
        } else {
          reject(res);
        }
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};

const spGet: Request = (url, param = {}, custom = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: param, ...custom })
      .then((res: AxiosResponse) => {
        if (res.status > 199 && res.status < 300) {
          resolve(res);
        } else {
          reject(res);
        }
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};

const spPost: Request = (url, data = {}, custom = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, custom)
      .then((res: AxiosResponse) => {
        if (res.status > 199 && res.status < 300) {
          resolve(res);
        } else {
          reject(res);
        }
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};

export default {
  /** get请求 */
  get,
  /** post请求 */
  post,
  /** spPost请求 */
  spPost,
  /** spGet请求 */
  spGet,
  /** axios请求 */
  axios<T = any>(custom: AxiosRequestConfig = {}): AxiosPromise<T> {
    return axios(custom);
  },
  // 获取token
  getTolen: Token(),
};
