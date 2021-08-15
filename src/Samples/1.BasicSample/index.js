import React, { Component } from "../../React/react.js";
import ReactDOM from "../../React/react-dom.js";

// This exact same code can be written with using the real React API, and will render the exact same view
class Button extends Component {
  render() {
    return React.createElement("button", null, "Hello");
  }
}

class ShoppingList extends Component {
  render() {
    return React.createElement(
      "ul",
      null,
      ...this.props.items.map((item) => {
        return React.createElement("li", null, item);
      })
    );
  }
}

class App extends Component {
  render() {
    return React.createElement(
      "div",
      { className: "wrapper" },
      "Hi ",
      React.createElement(Button, null, "Hi"),
      React.createElement(Button, null, "Second Button"),
      React.createElement(
        ShoppingList,
        { items: ["Water", "Beer", "Test"] },
        null
      )
    );
  }
}

const app = React.createElement(App);
console.log(app);

ReactDOM.render(app, document.getElementById("root"));
