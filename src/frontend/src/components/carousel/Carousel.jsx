import React from 'react';
import banners from "./banners.js"
import Banner from './Banner.jsx';
function createBanner(bannerItem) {
  return (
    <Banner
      key={bannerItem.key}
      name={bannerItem.name}
      image={bannerItem.imgURL}
      linkurl={bannerItem.linkurl}

    />
  );
  
}
function Carousel() {
  
  var image = banners[0].imgURL;
  //console.log(image); 
  return (
    <div id="myCarousel" class="carousel slide container-fluid" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="bd-placeholder-img" width="100%" height="auto" src="http://localhost:8083/images/banner10.jpg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>

        
      </div>
      <div class="carousel-item">
      <img class="bd-placeholder-img" width="100%" height="auto" src="http://localhost:8083/images/banner11.jpg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>

     
      </div>
      <div class="carousel-item">
      <img class="bd-placeholder-img" width="100%" height="auto" src="http://localhost:8083/images/banner12.jpg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>

      
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  );

}

export default Carousel;