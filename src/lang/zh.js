import { proxyTitle } from '../utils/i18n';

/*
 *  @params title: target中没有列出的属性的返回值
 *  @params target: 要被代理的对象。
 *                  哪些页面的 document.title 需要特殊值，则设置在 target 中
 *                  未设置在target中的页面，通过代理统一使用 title 的值作为 document.title 的值
 * */


export default {
  common: {
    query: '查询',
    reset: '重置',
    import: '导入',
    export: '导出',
    add: '新增',
    update: '修改',
    delete: '删除',
    ok: '确定',
    cancel: '取消',
    operation: '操作',
    queryCondition: '查询条件',
    date: '日期',
    upCompany: '上游公司',
    startTime: '开始时间',
    endTime: '结束时间',
    transitNumber: '圆通运单号'
  },
  language: {
    'zh-cn': '中文（简体）',
    en: '英文',
    'zh-tw': '中文（繁体）'
  },
  message: {
    notSelect: '请先选择数据'
  },
  sidebar: {
    home: '首页',
    
    authentication: '权限页',
    loginV1: '登录页-V1',
    registerV1: '注册页-V1',
    loginV2: '登录页-V2',
    registerV2: '注册页-V2',
    lockscreen: '锁屏页',
    
    error: '异常页'
  },
  topbar: {
    screenfull: '全屏',
    cancelScreenfull: '取消全屏',
    tipsOfLang: '语言切换成功'
  },
  login: {
    username: '账号',
    password: '密码',
    forgetPassword: '忘记密码？',
    login: '登陆',
    notAccount: '还没有账户？',
    register: '快去注册',
    enterUsername: '请输入手机号',
    enterPassword: '请输入密码'
  },
  register: {
    username: '账号',
    verifyCode: '验证码',
    getCode: '获取验证码',
    email: '邮箱',
    password: '密码',
    forgetPassword: '忘记密码？',
    login: '登陆',
    hasAccount: '已有账号？',
    register: '快去注册',
    enterUsername: '请输入手机号',
    enterPassword: '请输入密码'
  },
  lockscreen: {
    currentLogin: '当前登陆账户',
    tips: '您的登陆信息已过期，请输入密码继续。',
    placeholder: '请输入密码',
    notyou: '换人了？',
    toggle: '切换账号'
  }
};
