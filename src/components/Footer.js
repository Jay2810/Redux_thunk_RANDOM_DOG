import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    console.log("In Footer", this.props.size);
    return (
      <div>
        <div>
          <h3 style={{ padding: "30px" }}>Footer Componenet</h3>

          <h4 style={{ color: "red" }}>Image URL : {this.props.url}</h4>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

const ConnectedFooter = connect((state) => {
  console.log("CONNECT Header | INIT STATE", state);
  return state;
})(Header);

export default ConnectedFooter;
