import dayjs from 'dayjs';

/**
 * 日期转化
 *
 * @param {number} value
 * @returns {string} `YY-MM-dd hh-mm-ss`
 */
export const _FormatDate = (value: number | string): string => {
  if (!value) return '';
  return dayjs(Number(value)).format('YYYY-MM-DD HH:mm:ss');
};

/**
 * 日期转化
 *
 * @param {Number} value
 * @returns {string} `YY-MM-dd`
 */
export const _FormatDate2 = (value: number | string): string => {
  if (!value) return '';
  return dayjs(Number(value)).format('YYYY-MM-DD');
};

/**
 * 处理日期区间
 *
 * @param {(Array<number | string> | string)} dates 区间值
 * @param {boolean} [isTime=false] 是否显示时分秒
 * @returns {string[]} `[YY-MM-dd hh-mm-ss] | [YY-MM-dd]`
 */
export const _FormatDateInterval = (
  dates: Array<number | string> | string,
  isTime = false,
): string[] => {
  if (!dates) {
    return [];
  }
  let val: Array<number | string> = [];
  if (typeof dates === 'string') {
    val = dates.split(',');
  }
  return val.map((v) => (isTime ? _FormatDate(v) : _FormatDate2(v)));
};

/**
 * 日期转化
 *
 * 参考 https://github.com/iamkun/dayjs
 */
export const _Dayjs: typeof dayjs = dayjs;
