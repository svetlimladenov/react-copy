const ReactDOM = {
  _renderChildren(children) {
    const res = children.map((child) => {
      if (typeof child === "string") {
        return child;
      } else {
        return this._createHtml(child);
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
  _createHtml(element) {
    if (typeof element.type === "string") { // E.g. 'div', 'span' ...
      return this._createDOMElement(element);
    }

    const component = new element.type(element.props);
    const renderedElement = component.render();

    return this._createHtml(renderedElement); // recursive call
  },
  render(element, where) {
    const result = this._createHtml(element);
    where.appendChild(result);
  },
};

export default ReactDOM;
