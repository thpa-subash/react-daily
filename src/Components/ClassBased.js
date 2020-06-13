import React, { Component } from "react";
class Classbased extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <p>Hello world {name}</p>
      </div>
    );
  }
}

export default Classbased;
