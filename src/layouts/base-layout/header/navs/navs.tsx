import React, { useState, useEffect, memo } from 'react';
import { HomeOutlined, WalletOutlined, DownOutlined, FileProtectOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { history } from 'umi';

import './navs.less';

type NavItem = {
  text: string;
  icon?: React.ReactNode;
  iconAfter?: React.ReactNode;
  key: string;
  path?: string;
  children?: Omit<NavItem, 'children'>[];
};

const navs: NavItem[] = [
  {
    text: '首页',
    icon: <HomeOutlined />,
    key: '/',
    path: '/',
  },
  {
    text: '我的课程',
    icon: <WalletOutlined />,
    key: 'my-courses',
    path: '/my-courses/list',
  },
  {
    text: '考试中心',
    icon: <WalletOutlined />,
    iconAfter: <DownOutlined />,
    key: 'examination-center',
    children: [
      {
        text: '试卷管理',
        icon: <WalletOutlined />,
        key: 'test-paper-management',
        path: '/examination-center/test-paper-management',
      },
      {
        text: '考试管理',
        icon: <WalletOutlined />,
        key: 'exam-management',
        path: '/examination-center/exam-management',
      },
    ],
  },
  {
    text: '···',
    key: 'system',
    children: [
      {
        text: '投稿管理',
        icon: <FileProtectOutlined />,
        key: 'contribute-manage',
        path: '/system/contribute-manage',
      },
    ],
  },
];

const buildClassName = (s: string) => `scf-base-layout-header-navs${s}`;

const getPath = (config: typeof navs, key: string) => {
  let path: string = '';

  config.some((item) => {
    if (item.children && item.children.length) {
      return item.children.some((sitem) => {
        if (sitem.key === key && sitem.path) {
          path = sitem.path;
          return true;
        }

        return false;
      });
    }

    if (item.key === key && item.path) {
      path = item.path;
      return true;
    }

    return false;
  });

  return path;
};

/**
 * 头部导航栏
 */
const BaseLayoutHeaderNavs: React.FC = () => {
  const [activedKey, setActivedKey] = useState('');

  const genOnClickMenu = (key: string) => () => {
    const path = getPath(navs, key);
    if (path) {
      // setActivedKey(k || key);
      history.push(path);
    }
  };

  // 初始化的时候加载激活
  // 当前组件在根路由上，所有无法直接监听 history.location.pathname，永远是 '/'
  useEffect(() => {
    const setKey = (pathname: string) => {
      setActivedKey(pathname.split('/')[1] || '/');
    };

    const unlisten = history.listen((route) => {
      setKey(route.pathname);
    });

    setKey(history.location.pathname);

    return () => {
      unlisten();
    };
  }, []);

  return (
    <div className={buildClassName('')}>
      {navs.map((item) => {
        return (
          <div
            key={item.key}
            className={classnames({
              [buildClassName('_item')]: true,
              [buildClassName('_item-actived')]: activedKey === item.key && item.key !== 'system',
            })}
            onClick={genOnClickMenu(item.key)}
          >
            {item.icon ? <span className={buildClassName('_icon')}>{item.icon}</span> : null}
            <span className={buildClassName('_title')}>{item.text}</span>
            {item.iconAfter ? (
              <span className={buildClassName('_icon-after')}>{item.iconAfter}</span>
            ) : null}

            {item.children && item.children.length ? (
              <div className={buildClassName('_subdata')}>
                {/* 套一层 视觉上与主导航隔离 */}
                <div className={buildClassName('_subdata-wrapper')}>
                  {item.children.map((sitem) => {
                    return (
                      <div
                        key={sitem.key}
                        className={buildClassName('_subdata-item')}
                        onClick={genOnClickMenu(sitem.key)}
                      >
                        {sitem.icon ? (
                          <span className={buildClassName('_icon')}>{sitem.icon}</span>
                        ) : null}
                        {sitem.text}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default memo(BaseLayoutHeaderNavs);
