import { createContext, useState } from "react";
import Order from "../pages/Order";

export const OrderContext = createContext();

export const OrderProvider = ({children}) => {

    const [ orderType, setOrderType ] = useState('productMagnets');
    const [ orderQuantity, setOrderQuantity ] = useState('');

    return (

        <OrderContext.Provider value={{ orderType, setOrderType, orderQuantity, setOrderQuantity }}>
            {children}
        </OrderContext.Provider>

    )    
}