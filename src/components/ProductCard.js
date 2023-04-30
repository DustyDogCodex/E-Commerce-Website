import { Button, Card } from "react-bootstrap"

function ProductCard({ id, name, price }){
    return(
        <Card id={id}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>${price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard