import React from 'react';
import ProductCard from '../ProductCard';
function Index({ currentItems }){
//所有的products
        return (
            <div className='center'>
            <div class="my-5">
                <div class="row justify-content-center">

                    {currentItems && currentItems.map((item) => (
                        <ProductCard
                            key={item.key}
                            name={item.name}
                            image={item.imgURL}
                            price={item.price}
                            sales={item.sales}
                            isSale={item.isSale}
                            originprice={item.originprice}
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

export default Index;