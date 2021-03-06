import React from 'react';
import banners from "./banners.json";
import Banner from './Banner';
import { render } from '@testing-library/react';

// const createBanner=() =>{
//   return (
//    <>
//    {banners.map(b=><Banner key={b.key} name={b.name} imgURL={b.imgURL} linkurl={b.linkurl}/>)}
//    </>
//   );

// }
interface Props {

}
interface State {
  active: string
 
}
class Carousel extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      
        active:"0"

    }
}

  // var image = banners[0].imgURL;
  //console.log(image); 
  render() {
    return (
      <>
        <section className="carousel slide container-fluid d-flex" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button id="b0" type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button id="b1" type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button id="b2" type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="bd-placeholder-img" width="100%" height="auto" src="http://localhost:8083/images/banner10.jpg" aria-hidden="true" />


          </div>
          <div className="carousel-item ">
            <img className="bd-placeholder-img" width="100%" height="auto" src="http://localhost:8083/images/banner11.jpg" aria-hidden="true" />


          </div>
          <div className="carousel-item">
            <img className="bd-placeholder-img" width="100%" height="auto" src="http://localhost:8083/images/banner12.jpg" aria-hidden="true" />


          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </section>
  </ >
  );


  }

}

export default Carousel;