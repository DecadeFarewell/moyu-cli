import _Storage from './storage';

/** 移除 Token */
export const _RemoveToken = () => {
  _Storage.remove('TOKEN');
};

/** 移除 用户信息 */
export const _RemoveUserInfo = () => {
  _Storage.remove('USER_INFO');
};

/** 移除 用户访问过的菜单 */
export const _RemoveUserStorageMenu = () => {
  _Storage.remove('userStorageMenu');
  window.store.commit('INIT_MENU_CONFIG');
};

/** 移除 用户访问过得模块 */
export const _RemoveUserStorageModules = () => {
  _Storage.remove('userStorageModules');
};

/** 移除 用户scid */
export const _RemoveScid = () => {
  _Storage.remove('scid');
};

/** 移除 用户相关信息 */
export const _RemoveTabs = () => {
  window.store.commit('DEL_ALL_VIEWS');
  window.store.commit('SET_MENU_ID', null);
};

/**
 * 移除 权限相关信息
 *
 * 包含:
 *
 *  `_RemoveToken`
 *
 *  `_RemoveUserInfo`
 */
export const _RemoveAllUser = () => {
  _RemoveToken();
  _RemoveUserInfo();
};

/**
 * 移除 用户当前所有 Tabs
 *
 * 包含:
 *
 * `_RemoveTabs`
 *
 * `_RemoveUserStorageMenu`
 *
 * `_RemoveUserStorageModules`
 */
export const _RemoveUserPermission = () => {
  _RemoveTabs();
  _RemoveUserStorageMenu();
  _RemoveUserStorageModules();
};

/**
 * 移除 所有配置
 *
 * 包含:
 *
 * `_RemoveToken`
 *
 * `_RemoveScid`
 *
 * `_RemoveUserInfo`
 *
 * `_RemoveTabs`
 *
 * `_RemoveUserStorageMenu`
 *
 * `_RemoveUserStorageModules`
 *
 */
export const _RemoveAll = () => {
  _RemoveScid();
  _RemoveAllUser();
  _RemoveUserPermission();
};
