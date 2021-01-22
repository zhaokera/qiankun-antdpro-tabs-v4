import React, { Component } from 'react';
import { loadMicroApp } from 'qiankun';

class MicroApp extends React.Component {
  containerRef = React.createRef();
  microApp = null;
  componentDidMount() {
    this.microApp = loadMicroApp({
      name: 'app1',
      entry: '//localhost:8001',
      container: this.containerRef.current,
      props: { name: 'qiankun' },
    });
  }
  componentWillUnmount() {
    this.microApp.unmount();
  }
  componentDidUpdate() {
    this.microApp.update({ name: 'app1' });
  }
  render() {
    return <div ref={this.containerRef}></div>;
  }
}
export default MicroApp;


// import { useMount, useUnmount } from "@umijs/hooks";
// import { customAlphabet } from "nanoid";

// const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz", 10);

// const MicroApp = ({ entry, params }) => {
//   const container = useRef(null);
//   const containerID = useRef(nanoid(10));
//   // const id = nanoid(10);
//   const microApp = useRef(null);

//   useMount(() => {
//     microApp.current = loadMicroApp({
//       name: `app${containerID.current}`,
//       entry,
//       // container: `#${id}`,
//       container: `#${containerID.current}`,
//     }, {
//       sandbox: { strictStyleIsolation: true },
//       singular: false
//     });
//   });

//   useUnmount(() => {
//     microApp.current.getStatus() === "MOUNTED" ? microApp.current.unmount() : 0;
//   })
//   // if (isUrl(entry)) { return (<NotFound />) }
//   return (
//     <div ref={container} id={containerID.current} />
//   )
// }

// export default MicroApp;

// class MicroApp extends Component {
//   microAppRef = null;

//   componentDidMount() {
//     const { name, entry } = this.props;
//     const app = {
//       name: 'app1',
//       entry: 'http//localhost:8001',
//       container: '#appContainer1',
//     };
//     this.microAppRef = loadMicroApp(app);
//   }

//   componentWillUnmount() {
//     this.microAppRef.mountPromise.then(() => this.microAppRef.unmount());
//   }

//   render() {
//     return <div id="appContainer1" />;
//   }
// }
