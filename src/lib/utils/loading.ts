/* eslint-disable import/prefer-default-export */
import { Loading } from 'element-ui';
import { LoadingServiceOptions } from 'element-ui/types/loading.d';

class Loadings {
  private loading: Loadings | null;

  constructor() {
    this.loading = null;
  }

  /**
   * 显示 loading
   *
   * @param {LoadingServiceOptions} [param={}]
   * @returns {Loadings}
   * @memberof Loadings
   */
  public show(param: LoadingServiceOptions = {}): Loadings {
    const service = Loading.service as any;
    const defaultParam = {
      id: new Date().getTime(),
      target: Loadings.getDocument(param.target),
      lock: true,
      text: '正在加载中',
      spinner: 'el-icon-loading font-30',
      customClass: 'font-20',
      background: 'rgba(255, 255, 255, 0.7)',
    };
    this.loading = service({ ...defaultParam, ...param });
    return this.loading as Loadings;
  }

  /**
   * 隐藏 loading
   *
   * @param {(Loadings | null)} [loading=this.loading]
   * @memberof Loadings
   */
  public close(loading: Loadings | null = this.loading) {
    if (loading) {
      loading.close();
    }
  }

  private static getDocument(elm: HTMLElement | string = '#appMain'): HTMLElement | string {
    return elm;
  }
}

/**
 * 加载动画
 *
 * http://element-cn.eleme.io/2.4/#/zh-CN/component/loading#options
 *
 * @class _Loading
 */
export const _Loading = new Loadings();
