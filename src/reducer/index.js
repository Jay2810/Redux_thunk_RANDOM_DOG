const initialState = {
  url: "https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_2269.jpg",
  loading: false,
  error: false,
  size: 150,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUESTED_DOG":
      console.log("IN Reducer (state,action)", state, "  ", action);
      return {
        ...state,
        url: "",
        loading: true,
        error: false,
      };
    case "REQUESTED_DOG_SUCCEEDED":
      console.log("IN Reducer (state,action)", state, "  ", action);
      return {
        ...state,
        url: action.url,
        loading: false,
        error: false,
      };
    case "REQUESTED_DOG_FAILED":
      console.log("IN Reducer (state,action)", state, "  ", action);
      return {
        ...state,
        url: "",
        loading: false,
        error: true,
      };
    case "RESIZE_IMAGEP":
      console.log("IN Reducer (state,action)", state, "  ", action);
      return {
        ...state,
        size: state.size + 10,
      };
    case "RESIZE_IMAGEM":
      console.log("IN Reducer (state,action)", state, "  ", action);
      return {
        ...state,
        size: state.size - 10,
      };

    case "RESIZE_IMAGE_PARAM": {
      console.log("IN Reducer parama (state,action)", state, "  ", action);
      return {
        ...state,
        size: action.size,
      };
    }

    default:
      console.log("RAN INTO DEFAULT");
      return state;
  }
};

//   export default {reducer}
