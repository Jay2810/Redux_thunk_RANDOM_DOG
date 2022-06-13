import React, { Component } from "react";
import { connect } from "react-redux";
// import { Provider } from "react-redux";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { resizeparam } from "../thunk";

function valuetext(value) {
  return `${value}°C`;
}

class DiscreteSlider extends Component {
    
    render() {
        
      const  titleChange = (e) => {
        //   console.log(this.props.url,e.target.value);
           this.props.dispatch(resizeparam(Number(e.target.value)))
          }
        return (
      <Box width="50%" sx={{margin:"0 auto", marginBottom:"20px"}}>
        
        <Slider
          id="slider1"
          aria-label="Size"
        //   value={440}
          defaultValue={this.props.size}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          value={this.props.size}
          step={30}
          marks
          min={60}
          max={600}
          // onChange={resizeparam(valuetext)}
          onChange={titleChange}
          color="secondary"
        />
      </Box>
    );
  }
}
const ConnectedSlider = connect((state) => {
  console.log("CONNECT Slider", state);
  return state;
})(DiscreteSlider);

export default ConnectedSlider;
