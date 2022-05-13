import React from 'react';
import ProductCard from '../ProductCard';
function IndexItems({ currentItems }){
//所有的products
        return (
            <div className='center'>
            <div class="my-5">
                <div class="row justify-content-center">

                    {currentItems && currentItems.map((item) => (
                        <ProductCard
                            key={item.id}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            sales={item.sales}
                            isSale={item.isSale}

                        />
                        // <div>
                        //     {console.log(item)}
                        // <h3>key #{item.name}</h3>


                        // </div>
                    ))
                    }

                </div>
            </div>
        </div>
        );
    
}

export default IndexItems;