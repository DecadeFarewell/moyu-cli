import _Storage from './storage';

const { origin } = window.location;

let type = 'test';
if (!origin.includes('tst.') && process.env.NODE_ENV !== 'development') {
  type = 'formal';
}

const scid = (): string => {
  // 在这修改scid
  // return 'sc9526AF69EEC9FE3B';
  if (process.env.NODE_ENV === 'development') {
    return 'sc35f640b7c88198a0';
  }
  return _Storage.get('scid') || 'platform';
};

/** 租户信息 */
export const _Tenant = {
  /** 获取scid */
  scid: scid(),
  /** 获取scid方法 */
  getScid: scid,
  /** 环境类型 测试 || 正式 */
  type,
};
