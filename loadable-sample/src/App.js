import React, { Component } from "react";

class App extends Component {
  handleClick = () => {
    import("./notify").then(({ default: notify }) => {
      notify();
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default App;
