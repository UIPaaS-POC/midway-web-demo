import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';

export default (appInfo: MidwayAppInfo) => {
  return {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1679933216534_8067',
    egg: {
      port: 7002,
    },
    // security: {
    //   csrf: false,
    // },
    view: {
      mapping: {
        '.ejs': 'ejs',
      },
    },
    ejs: {},
  } as MidwayConfig;
};
