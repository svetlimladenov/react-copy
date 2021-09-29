const React = {
  createElement(type, props, ...children) {
    const propsWithChildren = {};
    if (children.length > 0) {
      Object.assign(propsWithChildren, props, { children });
    }
    return {
      type,
      props: propsWithChildren,
    };
  },
};

const properties = {
  className: (domElement, value) => {
    const classes = value.split(" ");
    domElement.classList.add(...classes);
  },
  onClick: (domElement, callback) => {
    domElement.addEventListener("click", callback);
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

    if (!element.props.children) {
      return domElement;
    }

    const createChild = (child) => {
      if (typeof child === "string") {
        return child;
      } else {
        return this.convertReactElementToDomElement(child);
      }
    };

    Object.keys(element.props)
      .filter((key) => key !== "children")
      .map((key) => {
        if (properties[key]) {
          properties[key](domElement, element.props[key]);
        }
      });

    if (Array.isArray(element.props.children)) {
      const children = element.props.children.map(createChild);
      domElement.append(...children);
    } else {
      const child = createChild(element.props.children);
      domElement.append(child);
    }
    return domElement;
  },
};

function App() {
  return /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement("h1", null, "Super cool"),
    /*#__PURE__*/ React.createElement(
      "button",
      {
        className: "btn",
        onClick: () => {
          console.log("test");
        },
      },
      "Whats up ?"
    )
  );
}

const app = React.createElement(App, {});

ReactDOM.render(app, document.getElementById("root"));
