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

const ReactDOM = {
  render(element, container) {
    const domNodes = this.generateDOMNodes(element);
    container.appendChild(domNodes);
  },
  generateDOMNodes(element) {
    if (typeof element.type === "string") {
      return this.createDOMElement(element);
    }
  },
  createDOMElement(element) {
    const domNode = document.createElement(element.type);
    const childrenNodes = this.generateChildrenNodes(element.props.children);
    domNode.append(...childrenNodes); // the text content of the element
    return domNode;
  },
  generateChildrenNodes(children) {
    const res = children.map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        // should fix this
        return child;
      }
    });
    return res;
  },
};

const div = React.createElement("div", null, "hello");
ReactDOM.render(div, document.getElementById("root"));
