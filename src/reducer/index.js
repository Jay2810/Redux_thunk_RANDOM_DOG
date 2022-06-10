
const initialState = {
    url: "",
    loading: false,
    error: false,
    size : 150
  };
   
export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "REQUESTED_DOG":
        return {
            ...state,
          url: "",
          loading: true,
          error: false
        };
      case "REQUESTED_DOG_SUCCEEDED":
        return {
            ...state,
          url: action.url,
          loading: false,
          error: false
        };
      case "REQUESTED_DOG_FAILED":
        return {
            ...state,
          url: "",
          loading: false,
          error: true
        };
       case "RESIZE_IMAGEP":
        return{
            ...state,
            size:state.size+10
        }
        
      ;
     case "RESIZE_IMAGEM":
        return{
            ...state,
            size:state.size-10
        };

    case "RESIZE_IMAGE_PARAM":{
        console.log("CASE");
      return{
        ...state,
        size:action.size
      }      
        }
        
      default:
        console.log("RAN INTO DEFAULT");
        return state;
    }
  };

//   export default {reducer}