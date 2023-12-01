"use client";
import { useContext, useState } from "react";
import StoreContext from ".";

const StoreProvider = ({ children }) => {

    const [bookCart, setBookCart] = useState([]);

    const globalData = {
        bookCart, setBookCart,
    }

    return (
        <StoreContext.Provider value={globalData}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;

export const useStoreContext = () => useContext(StoreContext);