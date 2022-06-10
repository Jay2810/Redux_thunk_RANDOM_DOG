import { requestDog,requestDogSuccess,requestDogError,resize,resizeparambyvalue } from "../actions";
import axios from "axios";

export const fetchDog = () => {
    return dispatch => {
      dispatch(requestDog());
      axios.get('https://dog.ceo/api/breeds/image/random')
      .then((res)=>{
        console.log(res.data.message);
        dispatch(requestDogSuccess(res.data))
      })
      .catch((err)=>{
        console.log(err);
        dispatch(requestDogError())
      })
    };
  };
  
export const resizeimg = (value) =>{
    return dispatch => {
        dispatch(resize(value))
    }
}

export const resizeparam = (value) => {
    console.log("PARAM",value);
    return dispatch => {
        dispatch(resizeparambyvalue(value))
    }
}