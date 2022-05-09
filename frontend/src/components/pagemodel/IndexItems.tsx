import React from 'react';
import ProductCard from '../ProductCard';
const IndexItems: React.FC<any> = (props) => {
    //所有的products
    //Array<{id:uumber,name:string,image:string,price:number,sales:number,isSale:boolean}>
    return (
        <div className='center'>
            <div className="my-5">
                <div className="row justify-content-center">

                    {props.currentItems && props.currentItems.map(((item: { id: number, name: string, image: string, price: number, sales: number, isSale: boolean }) => (
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
                    )))}


                </div>
            </div>
        </div>
    );
}


export default IndexItems;