import { createContext, useState } from "react";
import Order from "../pages/Order";

export const OrderContext = createContext();

export const OrderProvider = ({children}) => {

    const [ orderType, setOrderType ] = useState(null);
    const [ orderQuantity, setOrderQuantity ] = useState(null);

    const orderObject = {
        orderType,
        setOrderType,
        orderQuantity,
        setOrderQuantity
    };

    return (

        <OrderContext.Provider value={{ orderObject }}>
            {children}
        </OrderContext.Provider>

    )    
}