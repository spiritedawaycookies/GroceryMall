import React, { Component } from 'react';

function ProductCard(props) {
    let isSale = props.isSale;
    return (
        <div class="col my-3 mx-1 px-1">
            
        <div style={{width:"300px"}} class="center card ">
           
            {isSale && <div class="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
            }
            {/* <!-- Product image--> */}
          
            <img style={{height:"200px",width:"auto",maxWidth:"100%",maxHeight:"100%"}} className="img" src={props.image} alt="..." />
          
            {/* <!-- Product details--> */}
            <div style={{height:"80px"}} class="card-body p-4">
                <div class="text-center">
                    {/* <!-- Product name--> */}
                    <h5 style={{fontSize:"100%"}}class="fw-bolder card-title">{props.name}</h5>
                    {/* <!-- Product price--> */}
                    <span   style={{fontSize:"70%"}} class="text-muted text-decoration-line-through"> ${props.originprice}</span>  ${props.price}
                </div>
            </div>
            {/* <!-- Product actions--> */}
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
            </div>
        </div>
        
    </div>
    );

}

export default ProductCard;