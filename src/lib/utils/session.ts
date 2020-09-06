/**
 * session 存储
 *
 * @class Session
 */
class Session {
  private session: Storage;

  private prefix: string;

  constructor() {
    this.session = window.sessionStorage;
    this.prefix = 'sc_';
  }

  /**
   * 设置 session
   *
   * @param {string} key 存储名称
   * @param {*} value 存储的值
   * @memberof Session
   */
  public set(key: string, value: any) {
    this.session.setItem(this.prefix + key, JSON.stringify(value));
  }

  /**
   * 获取 session
   *
   * @param {string} key 获取存储名称
   * @param {() => any} [fun] 获取后回调
   * @returns {*} 存储的值
   * @memberof Session
   */
  public get(key: string, fun?: (res: any) => any): any {
    let value: any = this.session.getItem(this.prefix + key);
    try {
      value = JSON.parse(value);
      if (!value && value !== false && value !== 0) {
        value = null;
      }
    } catch (e) {
      value = null;
    }
    return fun ? fun.call(this, value) : value;
  }

  public remove(key: string) {
    this.session.removeItem(this.prefix + key);
  }
}
export default new Session();
