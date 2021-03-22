import type { IRoute } from 'umi';

const routes: IRoute[] = [
  {
    path: '/',
    // name: '父路由',
    component: '@/layouts/base-layout/base-layout', // 本组件用于做一些全局化配置
    // menu: {
    //   // 隐藏此路由，子路由向上提
    //   // 如果子菜单有自己的子菜单，需要手动设置 false
    //   flatMenu: true,
    // },
    routes: [
      // 首页
      {
        path: '/',
        component: '@/pages/index',
      },

      // 我的课程
      {
        path: 'my-courses',
        component: '@/components/render-children/render-children',
        routes: [
          {
            // 课程列表
            path: 'list',
            component: '@/pages/my-courses/my-courses',
          },
        ],
      },

      // 考试中心
      {
        path: 'examination-center',
        component: '@/components/render-children/render-children',
        routes: [
          {
            // 试卷管理
            path: 'test-paper-management',
            component: '@/pages/examination-center/test-paper-management/test-paper-management',
          },
          {
            // 考试管理
            path: 'exam-management',
            component: '@/pages/examination-center/exam-management/exam-management',
          },
        ],
      },

      // 系统相关
      {
        path: 'system',
        component: '@/components/render-children/render-children',
        routes: [
          {
            // 投稿管理
            path: 'contribute-manage',
            component: '@/pages/system/contribute-manage/contribute-manage',
          },
        ],
      },

      {
        path: '/classroom',
        component: '@/pages/classroom/classroom',
      },
    ],
  },
];

export default routes;
