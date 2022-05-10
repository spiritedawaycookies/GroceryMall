import React from 'react';
import ProductCard from '../ProductCard';
interface Props {
    currentItems: Array<CardProps>
}
interface CardProps {
    id: number, name: string, image: string, price: number, sales: number, isSale: boolean,quantity:number
}
const IndexItems: React.FC<Props> = (props:Props) => {
  
    //所有的products
    //Array<{id:uumber,name:string,image:string,price:number,sales:number,isSale:boolean}>
    return (
        <div className='center'>
            <div className="my-5">
                <div className="row justify-content-center">

                    {props.currentItems && props.currentItems.map(((item) => (
                        (item.id)%3===0&&
                        <ProductCard
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        sales={item.sales}
                        isSale={true}
                        quantity={0}//暂时的
                        />
                      
                    )))}


                </div>
            </div>
        </div>
    );
}


export default IndexItems;