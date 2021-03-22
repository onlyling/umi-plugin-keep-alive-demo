import type { IRouteComponentProps } from 'umi';

import React, { useEffect } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import Header from './header/header';
import Footer from './footer/footer';

moment.locale('zh-cn');

const Layout: React.FC<IRouteComponentProps> = (props) => {
  // 每当路由变化、页面切换，回到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location.pathname]);

  return (
    <ConfigProvider locale={zhCN}>
      <Header />
      {props.children}
      <Footer />
    </ConfigProvider>
  );
};

export default Layout;
