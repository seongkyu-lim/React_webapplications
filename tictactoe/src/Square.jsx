import React from "react";

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
