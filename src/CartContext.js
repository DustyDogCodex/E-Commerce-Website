import { createContext, useState } from "react";
import { products } from "./products";

const CartContext = createContext({
    items: [],
    itemQuantity: () => {},
    addOne: () => {},
    removeOne: () => {},
    delete: () => {},
    totalCost: () => {}
})

function CartProvider({ children }){

    const [productsInCart, setProductsInCart] = useState([])

    const contextValue = {
        items: productsInCart,
        itemQuantity,
        addOne,
        removeOne,
        deleteOne,
        totalCost
    }

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }