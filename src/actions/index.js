export const requestDog = () => {
    return { type: "REQUESTED_DOG" };
  };
  
export const requestDogSuccess = data => {
    console.log("LOL",data.message);
    return { type: "REQUESTED_DOG_SUCCEEDED", url: data.message };
  };
  
export const requestDogError = () => {
    return { type: "REQUESTED_DOG_FAILED" };
  };

export const resize = (value) => {
    console.log("HOAL",value);
    if(value==="plus"){
    return {type : "RESIZE_IMAGEP"}
}
else{
    return {type : "RESIZE_IMAGEM"}
}
}

export const resizeparam = (value) => {
    console.log("HOAL2",value);
    return {type : "RESIZE_IMAGE_PARAM",size: Number(value)}
}