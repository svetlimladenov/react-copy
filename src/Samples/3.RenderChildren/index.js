import React from "../../React/react.js";
import ReactDOM from "../../React/react-dom.js";

class DivWrapper extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "wrapper" },
      ...this.props.children
    );
    // <div className="wrapper"></div>, we will not render the passed children, thats why we do this
    // <div className="wrapper">{this.props.children}</div>, so we render every child
  }
}

class App extends React.Component {
  render() {
    return React.createElement(DivWrapper, null, "hello");
    // < DivWrapper>hello</DivWrapper>
  }
}

const app = React.createElement(App, null);

ReactDOM.render(app, document.getElementById("root"));
