 import React, { Component } from 'react';

// const ProductCard=(props) =>{
//     // let isSale = props.isSale;
//     let originprice=Math.floor(props.price*1.1)/100;
//     let isSale=true;
//     return (
//         <div className="col my-3 mx-2 px-1">

//             <div style={{ width: "400px" }} className="center card ">

//                 {isSale && <div className="badge bg-primary text-white position-absolute" style={{ top: "1rem", right: "1rem" }}>Sale</div>
//                 }
//                 {/* <!-- Product image--> */}

//                 <img style={{ height: "300px", width: "auto", maxWidth: "100%", maxHeight: "100%" }} className="img" src={props.image} alt="..." />

//                 {/* <!-- Product details--> */}
//                 <div style={{ height: "120px" }} className="card-body bg-light p-4">
//                     <div className="text-center">
//                         {/* <!-- Product name--> */}
//                         <h5 style={{ fontSize: "100%" }} className="fw-bolder text-dark card-title">{props.name}</h5>
//                         {/* <!-- Product price--> */}
//                         <span style={{ fontSize: "70%" }} className="text-muted text-decoration-line-through"> {originprice}</span>  <span className='text-dark '>${props.price/100}</span>
//                     </div>
//                 </div>
//                 {/* <!-- Product actions--> */}
//                 <div className="card-footer bg-light  p-4 pt-0 border-top-0">
//                     <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
//                    <div style={{ bottom: "1rem", right: "1rem" }} className=' position-absolute'> <small className=" text-muted">
//                        sales: {props.sales}
//                     </small>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );

// }

// export default ProductCard;