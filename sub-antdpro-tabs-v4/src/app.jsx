import React from 'react';
import ReactDOM from 'react-dom';
import TableList from '@/pages/TableList';
// import serviceWorker from './service-worker';

function render(props) {
  const { container } = props;
  ReactDOM.render(
    <div>1111111111</div>,
    container ? container.querySelector('#root-app1') : document.querySelector('#root-app1'),
  );
}

function storeTest(props) {
  props.onGlobalStateChange(
    (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
    true,
  );
  props.setGlobalState({
    ignore: props.name,
    user: {
      name: props.name,
    },
  });
}

export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('slave bootstrap：', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    storeTest(props);
    render(props);
    console.log('slave mount：', props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    ReactDOM.unmountComponentAtNode(document.getElementById('root-app1'));
    console.log('slave unmount：', props);
  },
  // 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
  async update(props) {
    console.log('slave update：', props);
  },
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
