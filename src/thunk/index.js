import {
  requestDog,
  requestDogSuccess,
  requestDogError,
  resizeparambyvalue,
} from "../actions";
import axios from "axios";

export const fetchDog = () => {
  console.log("This fetchDog is a middleware");
  console.log("IN |thunk | fetchDogs()");
  return (dispatch) => {
    console.log("original reducer will be called by this middleware");
    dispatch(requestDog());
    
    
    setTimeout(()=>
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        // console.log(res.data.message);
        dispatch(requestDogSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(requestDogError());
      }
      ),1000
      
      );
  };
};

// export const resizeimg = (value) =>{
//     return dispatch => {
//         dispatch(resize(value))
//     }
// }

export const resizeparam = (value) => {
  // console.log("PARAM",value);
  return (dispatch) => {
    dispatch(resizeparambyvalue(value));
  };
};
