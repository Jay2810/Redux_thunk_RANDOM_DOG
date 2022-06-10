import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer/index.js";
import { fetchDog, resizeimg, resizeparam } from "./thunk";

const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            console.log("CLICKED SHOW DOG: this.props", this.props);
            this.props.dispatch(fetchDog());
          }}
        >
          <h3> Show Dog </h3>
        </button>

        {"          "}

        <button onClick={() => this.props.dispatch(resizeimg("plus"))}>
          <h3> Resize Image + 10 </h3>
        </button>

        {"          "}

        <button onClick={() => this.props.dispatch(resizeimg("minus"))}>
          <h3> Resize Image - 10 </h3>
        </button>

        {this.props.loading ? (
          <p>Loading...</p>
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
            }}
          >Manual Size</button>
        </h3>
        {/* <button onClick={() => console.log(Number(document.getElementById('sizeq').value))}><h3> Resize Image by val </h3></button> */}
      </div>
    );
  }
}

const ConnectedApp = connect((state) => {
  console.log("CONNECT APP | INIT STATE",state);
  return state;
})(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);
