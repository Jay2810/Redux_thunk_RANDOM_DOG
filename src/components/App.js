import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDog, resizeparam } from "../thunk";
import Header from "./Header";
import Footer from "./Footer";
import ConnectedFooter from "./Footer";

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            border: "5px solid ",
            marginBottom: "50px",
          }}
        >
          <Header />
        </div>{" "}
        <button
          onClick={() => {
            console.log("CLICKED SHOW DOG: this.props", this.props);
            this.props.dispatch(fetchDog());
          }}
        >
          <h3> Show Dog </h3>
        </button>
        {"          "}
        <button onClick={() => this.props.dispatch({ type: "RESIZE_IMAGEP" })}>
          <h3> Resize Image + 10 </h3>
        </button>
        {"          "}
        <button onClick={() => this.props.dispatch({ type: "RESIZE_IMAGEM" })}>
          <h3> Resize Image - 10 </h3>
        </button>
        {this.props.loading ? (
          <p>1 seconds delay Loading...</p>
        ) : this.props.error ? (
          <p>Error, try again</p>
        ) : (
          <div>
            <br />
            <br />
            <img
              src={this.props.url}
              alt="Hi"
              height={this.props.size}
              width={this.props.size}
            />
            <h4>
              {this.props.size}
              {" x "}
              {this.props.size}
            </h4>
          </div>
        )}
        <h3>
          <input type="text" id="sizeq" />
          {"                            "}

          <button
            onClick={() => {
              this.props.dispatch(
                resizeparam(Number(document.getElementById("sizeq").value))
              );
              //   this.props.dispatch({
              //     type:"RESIZE_IMAGE_PARAM", size:Number(document.getElementById("sizeq"))
              // })
            }}
          >
            Manual Size
          </button>
        </h3>
        {/* <button onClick={() => console.log(Number(document.getElementById('sizeq').value))}><h3> Resize Image by val </h3></button> */}
        <div
          style={{
            textAlign: "center",
            border: "5px solid ",
            marginBottom: "50px",
          }}
        >
          <ConnectedFooter />
        </div>
      </div>
    );
  }
}

const ConnectedApp = connect((state) => {
  console.log("CONNECT APP | INIT STATE", state);
  return state;
})(App);

export default ConnectedApp;
