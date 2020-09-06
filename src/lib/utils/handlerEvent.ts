/**
 * 节流函数
 *
 * @param {Function} fun 事件触发的操作
 * @param {Number} delay 间隔多少毫秒需要触发一次事件
 * @returns {Function}
 */
export const _Throttle = (fun: Function, delay = 500): Function => {
  const self = fun;
  let timer: any = null;
  let isFirst = false;
  return (...rest: []) => {
    if (!isFirst) {
      self(...rest);
      isFirst = true;
    }
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      self(...rest);
    }, delay);
  };
};

/**
 * 防抖函数
 *
 * @param {Function} fun 事件触发的操作
 * @param {Number} delay 多少毫秒内连续触发事件，不会执行
 * @returns {Function}
 */
export const _Debounce = (fun: Function, delay = 500): Function => {
  let timer: number | null = null;
  return (...rest: []) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fun(...rest);
    }, delay);
  };
};
