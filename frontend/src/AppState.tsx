import React, { useState, useEffect, useContext } from "react";

interface AppStateValue {
    username: string,
    cart: { items: { productName: string, productImage: string, quantity: number, price: number, totalPrice: number }[] }
}
const defaultContexValue: AppStateValue = {
    username: "lcy",
    cart: { items: [] }
}
export const appContext = React.createContext(defaultContexValue)

export const AppStateProvider: React.FC = (props:any) => {
    const [state, setState] = useState(defaultContexValue)
    return <appContext.Provider value={state}>{props.children}</appContext.Provider>
}