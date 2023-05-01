import { Button, Card, Col, Form, Row } from "react-bootstrap"
import { CartContext } from "../CartContext"
import { useContext } from "react"

function ProductCard({ id, name, price }){

    //using CartContext to add items to our cart.
    const cartContext = useContext(CartContext)
    const itemQuantity = cartContext.itemQuantity(id)
    console.log(cartContext.productsInCart)

    return(
        <Card id={id}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>${price}</Card.Text>
                { itemQuantity > 0 
                    ? 
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6"> In Cart: {itemQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm='6' className="mx-2" onClick={() => cartContext.addOne(id)}>+</Button>
                                <Button sm='6' className="mx-2 px-3" onClick={() => cartContext.removeOne(id)}>-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" className="my-3" onClick={() => cartContext.deleteOne(id)}>Remove from Cart</Button>
                    </>
                    :
                    <Button variant="primary" onClick={() => cartContext.addOne(id)}>Add to Cart</Button>
                }   
            </Card.Body>
        </Card>
    )
}

export default ProductCard