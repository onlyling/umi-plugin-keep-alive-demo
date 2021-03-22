import { defineConfig } from 'umi';

import routes from './src/routes';

const isDev = process.env.NODE_ENV !== 'production';
const baseURL = isDev ? '/' : './';

export default defineConfig({
  runtimePublicPath: false,

  publicPath: baseURL,

  history: {
    type: 'hash',
  },

  webpack5: {
    // 基于路由的按需编译
    // lazyCompilation: {},
  },

  title: 'umi-plugin-keep-alive',

  favicon: `${baseURL}favicon.ico`,

  routes,

  nodeModulesTransform: {
    type: isDev ? 'none' : 'all',
  },

  /**忽略 moment 的 locale 文件，用于减少尺寸。 */
  ignoreMomentLocale: true,

  theme: {
    'font-family':
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,'Noto Sans', sans-serif, 'Microsoft YaHei', '微软雅黑', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','Noto Color Emoji'",
    'primary-color': '#025036',
  },

  hash: true,

  dynamicImport: {
    loading: '@/components/loading/loading',
  },

  fastRefresh: {},
});
