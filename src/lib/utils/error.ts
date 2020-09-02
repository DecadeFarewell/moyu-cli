/* eslint-disable no-console */
import { AxiosError } from 'axios';

export const _ResponseError = (res: AxiosError) => {
  /**
   * 地址:url
   * 请求方式:method
   * scid
   * 请求参数
   * 错误码
   * 返回错误信息
   */
  // const { config, request } = res;
  // const { url, method, params, data, headers } = config;

  // const { scid } = headers;
  // const { status, statusText } = request;
  console.error(res);
  // console.error({ ...res });
};

export const _WebError = (err: any) => {
  console.error('err---', err);
};
