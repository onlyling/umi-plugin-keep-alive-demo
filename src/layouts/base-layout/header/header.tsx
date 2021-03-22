import React from 'react';

import Navs from './navs/navs';

import './header.less';

const buildClassName = (s: string) => `scf-base-layout-header${s}`;

/**
 * 基础布局页头
 */
const BaseLayoutHeader: React.FC = () => {
  return (
    <div className={buildClassName('')}>
      <div>todo 头部适配</div>

      <Navs />

      <div>用户信息</div>
    </div>
  );
};

export default BaseLayoutHeader;
