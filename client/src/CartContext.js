import { createContext, useState } from "react";
import { findProductByID } from "./products";

const CartContext = createContext({
    productsInCart: [],
    itemQuantity: () => {},
    addOne: () => {},
    removeOne: () => {},
    deleteOne: () => {},
    totalCost: () => {}
})

function CartProvider({ children }){

    const [productsInCart, setProductsInCart] = useState([])

    //function for grabbing item quantity from id of element being clicked
    function itemQuantity(id){
        const quantity = productsInCart.find(product => product.id === id)?.quantity 

        if(quantity === undefined){
            return 0
        }

        return quantity

    }

    //function to add one item to cart
    function addOne(id){
        const quantity = itemQuantity(id)

        if(quantity === 0){   
            //item has not been added to the cart previously
            setProductsInCart([...productsInCart, { id, quantity: 1 }])
        } else {              
            //item is in the cart already 
            setProductsInCart(
                productsInCart.map(
                    item =>
                    item.id === id 
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                )
            )
        }
    }

    //function for deleting all items of a particular id from the cart
    function deleteOne(id){
        //using filter to remove items matching given id
        setProductsInCart(
            productsInCart.filter(
                item =>
                item.id !== id
            )
        )
    }

    //function for removing an item from cart
    function removeOne(id){
        const quantity = itemQuantity(id)

        if(quantity === 1){   
            //only one item in the cart
            deleteOne(id)
        } else {              
            //item is in the cart already 
            setProductsInCart(
                productsInCart.map(
                    item =>
                    item.id === id 
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                )
            )
        }
    }

    //function for calculating total cost of all items in cart
    function totalCost(){
        let totalCost = 0
        productsInCart.forEach(
            item => {
                const itemData = findProductByID(item.id)
                totalCost += (itemData.price * item.quantity)
            }
        )
        return totalCost
    }

    const contextValue = {
        productsInCart: productsInCart,
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