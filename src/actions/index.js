export const requestDog = () => {
  console.log('IN actions requestDog() | will only return type:"REQUESTED_DOG" ');
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
  console.log("IN Action resize");
    if(value==="plus"){
    return {type : "RESIZE_IMAGEP"}
}
else{
    return {type : "RESIZE_IMAGEM"}
}
}

export const resizeparambyvalue = (value) => {
    console.log("IN Action RESIZE BY PARAM will return (type,size) "  );
    return {type : "RESIZE_IMAGE_PARAM",size: Number(value)}
}