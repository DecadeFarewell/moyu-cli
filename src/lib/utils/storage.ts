/**
 * 本地存储方法
 *
 * @class Storages
 */
class Storages {
  private storage: Storage;

  private prefix: string;

  constructor() {
    this.storage = window.localStorage;
    this.prefix = 'sc_';
  }

  /**
   * 存数据
   *
   * @param {string} key 存储名称
   * @param {*} value 存储的值
   * @memberof Storages
   */
  public set(key: string, value: any) {
    this.storage.setItem(this.prefix + key, JSON.stringify(value));
  }

  /**
   * 取数据
   *
   * @param {string} key 存储名称
   * @param {Function} [fun] 获取存储后的回调
   * @returns {*} 存储的值
   * @memberof Storages
   */
  public get(key: string, fun?: (res: any) => void): any {
    let value: any = this.storage.getItem(this.prefix + key);
    try {
      value = JSON.parse(value);
      if (!value && (value !== false && value !== 0)) {
        value = null;
      }
    } catch (e) {
      value = null;
    }
    return fun ? fun.call(this, value) : value;
  }

  /**
   * 可以失效的存数据
   *
   * @param {string} key 存储名称
   * @param {*} value 存储的值
   * @param {number} [time=1] 有效时间，默认(1分钟)
   * @memberof Storages
   */
  public setTime(key: string, value: any, time: number = 1) {
    const H = time * 1000 * 60; // 默认1分钟
    const now = new Date().getTime() + H;
    const data = JSON.stringify({ time: String(now), value });
    this.storage.setItem(this.prefix + key, data);
  }

  /**
   * 取带时间的数据,时间过期则删除本条存储
   *
   * @param {string} key 存储名称
   * @param {Function} [fun] 获取存储后的回调
   * @returns {*} 存储的值
   * @memberof Storages
   */
  public getTime(key: string, fun?: (res: any) => void): any {
    let value = null;
    let data = null;
    try {
      data = this.storage.getItem(this.prefix + key) || null; // 获取储存
      value = data ? JSON.parse(data) : null;
      if (!value) {
        return null;
      }
      if (value.value && !value.time) {
        throw new Error('获取的存储没有time字段!使用get方法!');
      }

      const now = new Date().getTime(); // 当前时间

      if (Number(value.time) < now) {
        this.storage.removeItem(this.prefix + key);
        return null;
      }
    } catch (e) {
      value = {};
    }
    return fun ? fun.call(this, value.value) : value.value;
  }

  /**
   * 删除本地存储
   *
   * @param {string} key 存储名称
   * @memberof Storages
   */
  public remove(key: string) {
    this.storage.removeItem(this.prefix + key);
  }

  /**
   * 遍历所有本地存储
   *
   * @param {(key: string, val: any) => void} fun
   * @memberof Storages
   */
  public each(fun: (key: string, val: any) => void) {
    const data = this.storage;
    let val = null;
    for (const k in data) {
      // eslint-disable-next-line no-prototype-builtins
      if (data.hasOwnProperty(k)) {
        try {
          val = JSON.parse(data[k]);
          if (val.time) {
            val = val.value;
          }
          if (fun) fun(k, val);
        } catch (error) {
          throw new Error(`${error}--请使用 Storage 存储`);
        }
      }
    }
  }
}
export default new Storages();
