import React, { useContext, useState } from 'react';
import { idText } from 'typescript';
import { appContext, appSetStateContext } from "../AppState";

// interface BTNProps {
//     id: number
// }

function AddToCartBtn({ pid,productName, price }) {
    const value = useContext(appContext)
    const stState = useContext(appSetStateContext);

      //千万不要用useState, 会不停的重复渲染
    let quantity = 0;
    let totalPrice = price * quantity;
    const addToCart = (pid) => {
        quantity += 1;
       
        
        if (stState) {
            console.log(quantity);
            stState(stt => {
                return {
                    ...stt,
                    cart: [...stt.cart, {
                        pid, productName,quantity, totalPrice
                    }]
                }
            }

            )
        }
        console.log(value.cart);
        
    }
    return <>
        <div className="text-center">
            <button className="btn btn-outline-dark mt-auto" onClick={addToCart} >
                Add to cart</button></div>

    </>;
}
export default AddToCartBtn;