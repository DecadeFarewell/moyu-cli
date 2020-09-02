/**
 * 验证是否合法链接
 *
 * @param {string} url
 * @returns {boolean}
 */
export const _ValidateURL = (url: string): boolean => {
  // tslint:disable-next-line:max-line-length
  const re = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return re.test(url);
};

/**
 * 验证时间
 *
 * @param {string} time
 * @returns {boolean}
 */
export const _ValidateTime = (time: string): boolean => {
  const re = /([01]?\d|2[0-3]):[0-5]?\d:[0-5]?\d/;
  return re.test(time);
};

/**
 * 验证ip地址
 *
 * @param {string} ip
 * @returns {boolean}
 */
export const _ValidateIP = (ip: string): boolean => {
  const re = /\d{0,3}\.\d{0,3}\.\d{0,3}\.\d{0,3}/;
  return re.test(ip);
};

/**
 * 验证手机号
 *
 * @param {string} phone
 * @returns {boolean}
 */
export const _ValidatePhone = (phone: string): boolean => {
  const re = /^1[0-9]{10}$/;
  return re.test(phone);
};

/**
 * 验证汉字
 *
 * @param {string} Chinese
 * @returns {boolean}
 */
export const _ValidateChinese = (chinese: string): boolean => {
  const re = /[\u4e00-\u9fa5]+/;
  return re.test(chinese);
};
/**
 * 只能输入汉字、字母、中间点“·”
 *
 * @param {string} Chinese
 * @returns {boolean}
 */
export const _ValidateName = (name: string): boolean => {
  const re = /^[\u4E00-\u9FA5A-Za-z·]+$/;
  return re.test(name);
};

/**
 * 验证邮箱
 *
 * @param {string} email
 * @returns {boolean}
 */
export const _ValidateEmail = (email: string): boolean => {
  const re = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
  return re.test(email);
};

/**
 * 验证电话号
 *
 * @param {string} tel
 * @returns {boolean}
 */
export const _ValidateTel = (tel: string): boolean => {
  const re = /\d{3}-\d{8}|\d{4}-\d{7}/;
  return re.test(tel);
};

/**
 * 验证邮编
 *
 * @param {string} code
 * @returns {boolean}
 */
export const _ValidateCode = (code: string): boolean => {
  const re = /[1-9]\d{5}(?!\d)/;
  return re.test(code);
};

/**
 * 验证密码
 * (以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
 *
 * @param {string} password
 * @returns {boolean}
 */
export const _ValidatePassword = (password: string): boolean => {
  const re = /^[a-zA-Z]\w{5,17}$/;
  return re.test(password);
};
export const _ValidateBirthday = (birthday: string | number) => {
  if (typeof birthday === 'number') {
    birthday = String(birthday);
  }
  const check = /^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(birthday);
  if (!check) return false;
  const yyyy = parseInt(birthday.substring(0, 4), 10);
  const mm = parseInt(birthday.substring(4, 6), 10);
  const dd = parseInt(birthday.substring(6), 10);
  const xdata = new Date(yyyy, mm - 1, dd);
  if (xdata > new Date()) {
    return false;
  }
  if (xdata.getFullYear() === yyyy && xdata.getMonth() === mm - 1 && xdata.getDate() === dd) {
    return true;
  }
  return false;
};

/**
 * 验证身份证
 * 18位身份证号码(数字、字母x结尾)
 *
 * @param {string} id
 * @returns {boolean}
 */
export const _ValidateIdCard = (id: string): boolean => {
  let code = id;

  const city: any = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北 ',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏 ',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外 ',
  };
  // ∑(ai×Wi)(mod 11) 加权因子
  const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  // 校验位
  const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];

  /** 计算校检码 */
  const getParityBit = (idCardNo: string) => {
    const id17 = idCardNo.substring(0, 17);
    /* 加权 */
    let power = 0;
    for (let i = 0; i < 17; i++) {
      power += parseInt(id17.charAt(i), 10) * factor[i];
    }
    /* 取模 */
    const mod = power % 11;
    return parity[mod];
  };

  /* 15位转18位 */
  const getId18 = (idCardNo: string) => {
    if (idCardNo.length === 15) {
      const id17 = `${idCardNo.substring(0, 6)}19${idCardNo.substring(6)}`;
      const parityBit = getParityBit(id17);
      return id17 + parityBit;
    }
    if (idCardNo.length === 18) {
      return idCardNo;
    }
    return '';
  };

  /** 验证校检码 */
  const checkParityBit = (idCardNo: string) => {
    const parityBit = idCardNo.charAt(17).toUpperCase();
    // eslint-disable-next-line eqeqeq
    if (getParityBit(idCardNo) == parityBit) {
      return true;
    }
    return false;
  };

  if (!code) {
    return false;
  }

  if (!city[code.substr(0, 2)]) {
    return false;
  }

  if (code.length === 15) {
    code = getId18(code);
  }

  if (code.length === 18) {
    if (!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X|x)$/i.test(code)) {
      return false;
    }

    if (!_ValidateBirthday(code.substring(6, 14))) {
      return false;
    }

    if (!checkParityBit(code)) {
      return false;
    }
    return true;
  }

  return false;
};
