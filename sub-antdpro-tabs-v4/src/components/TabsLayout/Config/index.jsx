import Loadable from 'react-loadable';
import React from 'react';


const Loading = () => (<span>Loading...</span>);
const Welcome = Loadable({ loader: () => import('@/pages/Welcome'), loading: Loading, delay: 150 });
const TableList = Loadable({ loader: () => import('@/pages/TableList'), loading: Loading, delay: 150 });
const Add = Loadable({ loader: () => import('@/pages/Add'), loading: Loading, delay: 150 });

export const getTabsComponent = (key) => {
  switch (key) {
    case '/welcome':
      return <Welcome />;
    case '/list':
      return <TableList />;
    case '/add':
      return <Add />;
  }
};

// import Welcome from '@/pages/Welcome';
// import TableList from '@/pages/TableList';
// import Add from '@/pages/Add';

// import React, { Suspense, lazy } from "react";

// const Welcome = lazy(() => import('@/pages/Welcome'));
// const TableList = lazy(() => import('@/pages/TableList'));
// const Add = lazy(() => import('@/pages/Add'));

// export const getTabsComponent = (key) => {
//   let childView;
//   switch (key) {
//     case '/welcome':
//       childView = <Welcome />
//     case '/list':
//       childView = <TableList />
//     case '/add':
//       childView = <Add />
//     // case '/not-found':
//     //   childView = <NotFound />
//     // default:
//     //   childView = <NotFound />
//   }
//   return <Suspense fallback={<div>Loading...</div>}>
//     {childView}
//   </Suspense>
// }
