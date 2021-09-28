const React = {
  createElement(type, props, ...children) {
    const propsWithChildren = Object.assign(props, { children });
    return {
      type,
      props: propsWithChildren,
    };
  },
};

const ReactDOM = {
  render(element, container) {
    const domElement = this.convertReactElementToDomElement(element);
    container.appendChild(domElement);
  },
  convertReactElementToDomElement(element) {
    const domElement = document.createElement(element.type);
    domElement.append(element.props.children);
    return domElement;
  },
};

const element = React.createElement("div", {}, "hello there", "hi");

ReactDOM.render(element, document.getElementById("root"));
