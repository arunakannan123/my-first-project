import React from 'react';
import southPic from './image/southernpicture.jpg'
import northpic from './image/northpicture.jpg'
const locationconfig ={
  North:{
    text:"hi,you are from northern region of the world",
    image:northpic
  },
  South:{
    text:"hi,you are from southern region of the world",
    image:southPic
  }
}
const LocationTracking= ({latitude}) => {
  
  var  region = (latitude > 0) ? 'North' : 'South';
  const {text,image} = locationconfig[region]
  return(
     <div><img src={image} alt="location picture" ></img>
    {text}</div>
  )
}
export default LocationTracking