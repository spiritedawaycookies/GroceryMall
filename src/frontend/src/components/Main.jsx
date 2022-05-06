import React, { Component } from 'react';
import ProductCard from './ProductCard';
import products from './products.js';

function createCard(cardItem) {
    return (
        <ProductCard
            key={cardItem.key}
            name={cardItem.name}
            image={cardItem.imgURL}
            price={cardItem.price}
            sales={cardItem.sales}
            isSale={cardItem.isSale}
            originprice={cardItem.originprice}
        />
    );

}
// const override= {width:"1000px !important"}
function Main() {
    return (

                <div className='center'>
                    <div class="my-5">
                <div class="row justify-content-center">

                    {products.map(createCard)}
                </div>
                </div>
                </div>


    );
}



export default Main;