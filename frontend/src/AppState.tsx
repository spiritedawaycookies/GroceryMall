import React, { useState, useEffect, useContext } from "react";
import constant from './constant.json'
// interface cartItem{
//     productId:number,productName: string, productImage: string, quantity: number, price: number, totalPrice: number 
// }
interface productId{
    pid:number
}
interface CartProp {
    pid:number
    productName:string,
       quantity:number,
         totalPrice:number
}
// interface cartMap{
//     [pid:number]:{
//         productName:string,
//         quantity:number,
//         totalPrice:number
//     }
// }
interface AppStateValue {
    username: string|undefined,
    nickname: string|undefined,
    profilePic: string|undefined,
    cart: Map<number,CartProp>
     
    // addOnetoCart:()=>{}

}
const defaultContexValue: AppStateValue = {
    username: undefined,
    nickname: undefined,
    profilePic: undefined,
    cart:  
        new Map()
    }
    // addOnetoCart:()=>{return true;}
    

export const appContext = React.createContext(defaultContexValue)
export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>>|undefined>(undefined);
export const AppStateProvider: React.FC = (props: any) => {
    const [state, setState] = useState(defaultContexValue)
    return <appContext.Provider value={state}>
        <appSetStateContext.Provider value={setState}>
            {props.children}
        </appSetStateContext.Provider>
    </appContext.Provider>
}