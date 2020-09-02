import _Storage from './storage';
import _Session from './session';
import * as loading from './loading';
import * as tenant from './tenant';
import * as verify from './verify';
import * as _UserInfo from './userInfo';
import * as handlerEvent from './handlerEvent';
import * as formatDate from './formatDate';
import * as dialog from './operationDialog';
import * as error from './error';

export default {
  ...verify,
  ...tenant,
  ...dialog,
  ...loading,
  ...formatDate,
  ...handlerEvent,
  ...error,
  _UserInfo,
  _Storage,
  _Session,
};
