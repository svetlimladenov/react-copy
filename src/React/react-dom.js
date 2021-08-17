const ReactDOM = {
  renderChildren(children) {
    const res = children.map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        // should fix this
        return child;
      } else {
        return this.generateDOMNodes(child);
      }
    });
    return res;
  },
  createDOMElement(element) {
    const domNode = document.createElement(element.type);
    if (element.props.onClick) {
      domNode.addEventListener("click", (e) => {
        element.props.onClick(e);
      });
    }

    const childrenNodes = this.renderChildren(element.props.children);
    domNode.append(...childrenNodes); // the text content of the element
    return domNode;
  },
  generateDOMNodes(element, container) {
    if (typeof element.type === "string") {
      // E.g. 'div', 'span' ...
      return this.createDOMElement(element);
    }

    let component;
    if (typeof element.type === "function") {
      component = new element.type(element.props);
    } else {
      component = element.type;
    }

    /**
     * Used when updating the state, or with forceUpdate(..)
     * @param newElement The react element to be re-rendered
     */
    component.rerender = (newElement) => {
      this.render(newElement, container);
    };

    const renderedElement = component.render();

    return this.generateDOMNodes(renderedElement); // recursive call
  },
  render(element, container) {
    removeChildren(container);
    const renderedHtml = this.generateDOMNodes(element, container);
    container.appendChild(renderedHtml);
  },
};

function removeChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
}

export default ReactDOM;
