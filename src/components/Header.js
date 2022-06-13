import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    console.log("In header", this.props.size);
    return (
      <div>
        <div>
          <h3 style={{ padding: "20px" }}>Header Component</h3>
          <h4 style={{ color: "blue" }}>Size : {this.props.size}</h4>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

const ConnectedHeader = connect((state) => {
  console.log("CONNECT Header | INIT STATE", state);
  return state;
})(Header);

export default ConnectedHeader;
