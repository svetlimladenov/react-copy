import React from "../../React/react.js";
import ReactDOM from "../../React/react-dom.js";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
  }
  render() {
    return React.createElement(
      "button",
      {
        onClick: () => {
          this.setState({ counter: this.state.counter + 1 });
        },
      },
      this.state.counter
    );
  }
}

const app = React.createElement(Counter, { name: "Counter app" });

ReactDOM.render(app, document.getElementById("root"));
