"use client";
import { useContext, useState } from "react";
import StoreContext from ".";

const StoreProvider = ({ children }) => {

    const [cartData, setCartData] = useState([]);

    const globalData = {
        cartData, setCartData,
    }

    return (
        <StoreContext.Provider value={globalData}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;

export const useStoreContext = () => useContext(StoreContext);