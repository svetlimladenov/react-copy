const ReactDOM = {
  _renderChildren(children) {
    const res = children.map((child) => {
      if (typeof child === "string") {
        return child;
      } else {
        return this.createHtml(child);
      }
    });
    return res;
  },
  _createDOMElement(element) {
    const domNode = document.createElement(element.type);
    const childrenNodes = this._renderChildren(element.props.children);
    domNode.append(...childrenNodes); // the text content of the element
    return domNode;
  },
  createHtml(element) {
    if (typeof element.type !== "function") {
      return this._createDOMElement(element);
    }

    const component = new element.type(element.props);
    const rendered = component.render();

    return this.createHtml(rendered);
  },
  render(element, where) {
    const result = this.createHtml(element);
    where.appendChild(result);
  },
};

export default ReactDOM;
