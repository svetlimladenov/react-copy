const React = {
  createElement(type, props, ...children) {
    const properties = Object.assign({}, props);
    properties.children = children;
    return {
      type: type,
      props: properties,
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
