import { MessageBox } from 'element-ui';
import { ElMessageBoxOptions } from 'element-ui/types/message-box.d';

/**
 * 对话框
 * @param {string} [msg='提示语']
 * @param {string} [title='提示']
 * @param {ElMessageBoxOptions} [option={
 *     confirmButtonText: '确定',
 *     cancelButtonText: '取消',
 *     type: 'warning',
 *   }]
 * @returns
 */
export const _MessageConfirm = async (
  msg: string = '删除不可逆转，是否确定?',
  title: string = '提示',
  option?: ElMessageBoxOptions,
) => {
  try {
    const options = Object.assign(
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      },
      option,
    );
    await MessageBox.confirm(msg, title, options);
    return true;
  } catch (e) {
    return false;
  }
};

export function a() {
  // console.log('111---', 111);
}
