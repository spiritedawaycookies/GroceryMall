import React, { Component } from 'react';
import banners from "./banners.json";

interface BannerProps{
    key:number,
    name:string,
    imgURL:string,
    linkurl:string
}
const Banner:React.FC<BannerProps>=({key,name,imgURL,linkurl}) =>{
  return (
    <div className="carousel-item">
    <div>

            <img src={`${imgURL}`} className="img d-block w-100" alt='...'/>
        
      
    </div>
    </div>

  );
  
}



export default Banner;