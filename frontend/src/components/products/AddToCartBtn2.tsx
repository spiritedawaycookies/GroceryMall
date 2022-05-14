import React, { useContext, useState } from 'react';
import { idText } from 'typescript';
import { appContext, appSetStateContext } from "../../AppState";
import {useTranslation} from 'react-i18next'
interface BTNProps {
    pid: number,
    productName:string,
    price:number
}

const AddToCartBtn:React.FC<BTNProps>=({ pid, productName, price })=> {
    const {t}=useTranslation();
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
    const addToCart = () => {
        quantity += 1;
        let totalPrice = price * quantity;


        let newCart = value.cart.set(pid, {pid, productName, quantity, totalPrice })
        if (stState) {
            // console.log(quantity);
            stState(stt => {
                return {
                    ...stt,
                    cart: newCart
                }
            }

            )
        }
        console.log("pid type",typeof pid);
        console.log("car value type",typeof value.cart.get(25));
        
        console.log("cart",value.cart);
        


    }
    return <>
        <div className="text-center">
            <button className="btn btn-outline-primary mt-auto" onClick={addToCart} >
                {t('main.add_cart')}</button></div>

    </>;
}
export default AddToCartBtn;