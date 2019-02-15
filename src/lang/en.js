import { proxyTitle } from '../utils/i18n';

/*
 *  @params title: target中没有列出的属性的返回值
 *  @params target: 要被代理的对象。
 *                  哪些页面的 document.title 需要特殊值，则设置在 target 中
 *                  未设置在target中的页面，通过代理统一使用 title 的值作为 document.title 的值
 * */


export default {
  common: {
    query: 'Query',
    reset: 'Reset',
    import: 'Import',
    export: 'Export',
    add: 'Add',
    update: 'Update',
    delete: 'Delete',
    ok: 'Ok',
    cancel: 'Cancel',
    operation: 'Operation',
    queryCondition: 'Query Condition',
    date: 'date',
    upCompany: 'upCompany',
    startTime: 'Start Time',
    endTime: 'End Time',
    transitNumber: 'YTO transit number'
  },
  language: {
    'zh-cn': 'Chinese (Simplified)',
    en: 'English',
    'zh-tw': 'Chinese (Traditional)'
  },
  message: {
    notSelect: 'Please select data first'
  },
  sidebar: {
    home: 'Home Page',
    
    authentication: 'Authentication',
    login: 'Login',
    register: 'Register',
    loginV1: 'Login-V1',
    registerV1: 'Register-V1',
    loginV2: 'Login-V2',
    registerV2: 'Register-V2',
    lockscreen: 'Lock screen',
    
    error: 'Errors'
  },
  topbar: {
    screenfull: 'Screenfull',
    cancelScreenfull: 'Cancel Screenfull',
    tipsOfLang: 'switch language success'
  },
  login: {
    username: 'Username',
    password: 'Password',
    forgetPassword: 'Forgot password?',
    login: 'Sign In',
    notAccount: 'Don\'t have an account yet?',
    register: 'Sign Up',
    enterUsername: 'Please enter username',
    enterPassword: 'Please enter password'
  },
  register: {
    username: 'Username',
    verifyCode: 'Verify code',
    getCode: 'Get Verify Code',
    email: 'Email',
    password: 'Password',
    login: 'Sign In',
    hasAccount: 'Already have an account? ',
    register: 'Sign Up',
    enterUsername: 'Please enter username',
    enterPassword: 'Please enter password'
  },
  lockscreen: {
    currentLogin: 'LOGGED IN AS',
    tips: 'Your session is timed out. Please enter your password to proceed.',
    placeholder: 'Enter your password',
    notyou: 'Not you?',
    toggle: ' Login as a different user'
  }
};
