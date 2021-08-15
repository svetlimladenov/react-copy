const React = {
  createElement(type, props, ...children) {
    const returnProps = Object.assign({}, props);
    returnProps.children = children;
    return {
      type: type,
      props: returnProps,
    };
  },
};

class Component {
  constructor(props) {
    this.props = props || {};
  }
}

React.Component = Component;

export { Component };

export default React;
