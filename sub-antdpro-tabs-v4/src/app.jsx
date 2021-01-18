export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('slave bootstrap：', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('slave mount：', props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('slave unmount：', props);
  },
  // 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
  async update(props) {
    console.log('slave update：', props);
  },
};
