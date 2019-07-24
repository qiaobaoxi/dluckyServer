/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1562651029315_9115';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    mysql : {
      // 单数据库信息配置
      client: {
        // host
        host: '108.160.143.67',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'wj_021HOOP',
        // 数据库名
        database: 'dlucky',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },
    security: {
      csrf: {
        // cookieName: 'csrfToken',
        enable: false,
      },
    },
    user:{
      userName1: 'admin',
      password1: '331751',
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
