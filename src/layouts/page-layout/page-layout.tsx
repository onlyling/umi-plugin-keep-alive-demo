import React, { memo } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { useAliveController, history } from 'umi';

import './page-layout.less';

interface PageLayoutProps {
  /**
   * 是否是固定布局
   * @default true
   */
  fixed?: boolean;
}

const buildClassName = (s: string) => `scf-page-layout${s}`;

const NodeNameMap: Record<string, string> = {
  '/': '首页',
  '/my-courses/list': '我的课程',
  '/examination-center/test-paper-management': '试卷管理',
  '/examination-center/exam-management': '考试管理',
  '/system/contribute-manage': '投稿管理',
};

/**
 * 页面布局
 */
const PageLayout: React.FC<PageLayoutProps> = ({ children, fixed = true }) => {
  const { getCachingNodes, dropScope } = useAliveController();
  const cachingNodes = getCachingNodes();

  /**
   * 生成点击关闭按钮的回调
   */
  const genOnClickClose = (name: string) => (e: React.MouseEvent) => {
    e.stopPropagation();
    // 如果关闭激活中的 KeepAlive Tab，需要先离开当前路由
    // 触发 KeepAlive unactivated 后再进行 drop
    if (history.location.pathname === name) {
      const unlisten = history.listen(() => {
        unlisten();
        setTimeout(() => {
          dropScope(name);
        }, 60);
      });

      // 前往排除当前 node 后的最后一个 tab
      const otherNodes = cachingNodes.filter((node) => node.name !== name);
      const lastNode = otherNodes.pop();

      history.push(lastNode ? (lastNode.name as string) : '/');
    } else {
      dropScope(name);
    }
  };

  /**
   * 点击导航栏
   */
  const genOnClickNav = (name: string) => () => {
    if (history.location.pathname !== name) {
      history.push(name);
    }
  };

  return (
    <div
      className={classnames({
        [buildClassName('')]: true,
        [buildClassName('-fixed')]: fixed,
      })}
    >
      <div className={buildClassName('_nav')}>
        {cachingNodes.map((item) => {
          return (
            <div
              key={item.name}
              className={classnames({
                [buildClassName('_nav-item')]: true,
                [buildClassName('_nav-item-actived')]: item.name === history.location.pathname,
              })}
              onClick={genOnClickNav(item.name as string)}
            >
              {NodeNameMap[item.name as string]}

              <CloseOutlined onClick={genOnClickClose(item.name as string)} />
            </div>
          );
        })}
      </div>

      {children}
    </div>
  );
};

export default memo<typeof PageLayout>(PageLayout);
