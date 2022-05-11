import React, { useContext } from "react";
import { appContext, appSetStateContext } from "../../AppState";
import {BTNProps} from './AddToCartBtn';

export const withAddToCart = (ChildComponent: React.ComponentType<BTNProps>) => {
    return (props) => {
        const stState = useContext(appSetStateContext);
        const value = useContext(appContext)
        let found = value.cart.get(props.pid);
        if (found !== undefined) {
            var quantity = found?.quantity
        } else {

            var quantity: number = 0;
        }
        const addToCart = (pid,productName,price) => {
            quantity += 1;
            let totalPrice = props.price * quantity;
  
            let newCart = value.cart.set(props.pid, {pid:props.pid, productName:props.productName, quantity:quantity, totalPrice:totalPrice })
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
            console.log("pid type",typeof props.pid);
            console.log("car value type",typeof value.cart.get(25));
            
            console.log("cart",value.cart);
            
    
    
        }
      


        return <ChildComponent {...props} addToCart={addToCart}/>
    }
}