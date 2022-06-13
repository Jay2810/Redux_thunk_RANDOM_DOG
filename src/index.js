import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer/index.js";
// import ConnectedApp from "./components/App";
import AppBarTop from "./components/Appbar";
import Heading from "./components/Heading";
import ConnectedImageComp from "./components/ImageComp.js";
import ConnectedSlider from "./components/slider.js";
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <div style={{ textAlign: "center", alignItems: "center" }}>
      <AppBarTop />
      <Heading />
      <ConnectedSlider />
      <ConnectedImageComp />
    </div>
    {/* <ConnectedApp /> */}
  </Provider>,
  document.getElementById("root")
);
