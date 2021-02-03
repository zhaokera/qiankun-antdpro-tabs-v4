import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/index', component: '@/pages/index' },
    { path: '/add', component: '@/pages/Add' },
  ],
  fastRefresh: {},
  qiankun: {
    slave: {},
  },
});
