import React, { useContext, useState } from 'react';
import { idText } from 'typescript';
import { appContext, appSetStateContext } from "../AppState";
import {withAddToCart} from './AddtoCartHoc'
export interface BTNProps {
    pid: number,
    productName:string,
    price:number,
    addToCart:( pid, productName, price)=>void
}

const AddToCartBtn:React.FC<BTNProps>=({ pid, productName, price,addToCart })=> {
    const value = useContext(appContext)
    const stState = useContext(appSetStateContext);
    let found = value.cart.get(pid);
    // console.log("found", found);
    if (found !== undefined) {
        var quantity = found?.quantity
    } else {

        var quantity: number = 0;
    }
    
    //千万不要用useState, 会不停的重复渲染
    
    
    
    return <>
        <div className="text-center">
            <button className="btn btn-outline-dark mt-auto" onClick={()=>addToCart(pid,productName, price)} >
                Add to cart</button></div>

    </>;
}
export default withAddToCart(AddToCartBtn);