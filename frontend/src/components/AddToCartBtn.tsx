import React, { useContext, useState } from 'react';
import { idText } from 'typescript';
import { appContext, appSetStateContext } from "../AppState";

// interface BTNProps {
//     id: number
// }

function AddToCartBtn({ pid, productName, price }) {
    const value = useContext(appContext)
    const stState = useContext(appSetStateContext);
    let found = value.cart.find(ele => ele.pid == pid);
    console.log("found", found);
    if (found !== undefined) {
        var quantity = found?.quantity
    } else {

        var quantity: number = 0;
    }

    //千万不要用useState, 会不停的重复渲染
    const addToCart = (pid) => {
        if (quantity === 0) {
            quantity += 1;
            let totalPrice = price * quantity;

            if (stState) {
                console.log(quantity);
                stState(stt => {
                    return {
                        ...stt,
                        cart: [...stt.cart, {
                            pid, productName, quantity, totalPrice
                        }]
                    }
                }

                )
            }
            console.log(value.cart);
        } else {
            // quantity += 1;
            // let totalPrice = price * quantity;
            // if (found !== undefined) {
            //     found.quantity = quantity;
            // }
            // if (stState) {
            //     console.log(quantity);
            //     stState(stt => {
            //         return {
            //             ...stt,
            //             cart: [...stt.cart, {
            //                 pid, productName, quantity, totalPrice
            //             }]
            //         }
            //     }

            //     )
            // }
            // console.log(value.cart);
        }

    }
    return <>
        <div className="text-center">
            <button className="btn btn-outline-dark mt-auto" onClick={addToCart} >
                Add to cart</button></div>

    </>;
}
export default AddToCartBtn;