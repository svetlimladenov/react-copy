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

  /**
   * When called it triggers a re-render
   * @param obj The new state
   */
  setState(obj) {
    this.state = obj;
    this.rerender(React.createElement(this, this.props));
  }

  /**
   * Use to manually trigger a re-render
   */
  forceUpdate() {
    this.rerender(React.createElement(this, this.props));
  }
}

React.Component = Component;

export { Component };

export default React;
