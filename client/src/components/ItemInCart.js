//component for displaying items inside the cart

import { useContext } from "react"
import { CartContext } from "../CartContext"
import { findProductByID } from "../products"
import { Button } from "react-bootstrap"

function ItemInCart({ id, quantity }){
    const cartContext = useContext(CartContext)
    const itemData = findProductByID(id)

    return (
        <>
            <h3>{itemData.name}</h3>
            <p>Items: {quantity}</p>
            <p>Subtotal: { (quantity * itemData.price).toFixed(2) }</p>
            <Button variant="danger" size="sm" onClick={() => cartContext.deleteOne(id)}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default ItemInCart