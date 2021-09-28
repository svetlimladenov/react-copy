const React = {
  createElement(type, props, ...children) {
    const propsWithChildren = {};
    if (children.length > 0) {
      Object.assign(propsWithChildren, { children });
    }
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
    if (typeof element.type === "function") {
      return this.extractReactElement(element);
    } else if (typeof element.type === "string") {
      return this.createDomElement(element);
    }
  },
  extractReactElement(element) {
    const createdElement = new element.type();
    return this.convertReactElementToDomElement(createdElement);
  },
  createDomElement(element) {
    const domElement = document.createElement(element.type);
    domElement.append(element.props.children);
    return domElement;
  },
};

function Button() {
  return React.createElement("button", {}, "Click me");
}

const element = React.createElement("div", {}, "hello there", "hi");
const btn = React.createElement(Button, null);

ReactDOM.render(btn, document.getElementById("root"));
