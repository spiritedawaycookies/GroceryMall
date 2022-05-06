import React, { Component } from 'react';
import ProductCard from './ProductCard';
import products from './products.js';

function createCard(cardItem) {
    return(
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
function Main1() {
    return (
        <section className='album py-5 '>
            <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">

                <div class="row justify-content-center">
                    
                    {products.map(createCard)}
                    </div>
                    </div>
              

        </section>
    );
}



export default Main1;