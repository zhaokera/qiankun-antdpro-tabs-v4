import routeArray from '../../config/routes';
import { store } from '../utils/utils';

const { get } = store;
const GlobalModel = {
  namespace: 'tabs',
  state: {
    collapsed: false,
    notices: [],
    pathname: '/',
    pageName: '新页面',
    paths: [],
    pages: [],
  },
  effects: {},
  reducers: {
    // 设置当前Path
    setCurrentPath(state, { payload }) {
      const { pathname, pageName } = payload;
      const { paths } = state;
      if (!paths.some((path) => path === pathname)) {
        paths.push(pathname);
      }
      return { ...state, pathname, pageName, paths };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      const getName = (routes = [], pathname) => {
        const list = [];
        routes.forEach((item) => {
          // eslint-disable-next-line no-shadow
          const { routes, name } = item;
          if (routes && routes.length) {
            list.push(...getName(routes, pathname));
          } else if (name) {
            if (item.path === pathname) {
              list.push(name);
            }
          }
        });
        return list;
      };
      // 监听路由变化
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          return;
        }
        const id = pathname.split('/').slice(-1)[0];
        const { title } = get(id, 'sessionstorage') || {};
        let name = '';
        name = pathname.substr(pathname.lastIndexOf('/') + 1);
        const pageName = getName(routeArray, pathname)[0] || title || name || '新标签页';
        dispatch({ type: 'setCurrentPath', payload: { pathname, pageName: title || pageName } });
      });
    },
  },
};
export default GlobalModel;
