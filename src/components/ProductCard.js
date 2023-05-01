import { Button, Card } from "react-bootstrap"
import { CartContext } from "../CartContext"
import { useContext } from "react"

function ProductCard({ id, name, price }){

    const cartContext = useContext(CartContext)
    const itemQuantity = cartContext.itemQuantity(id)
    console.log(cartContext.productsInCart)

    return(
        <Card id={id}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>${price}</Card.Text>
                <Button variant="primary" onClick={() => cartContext.addOne(id)}>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard