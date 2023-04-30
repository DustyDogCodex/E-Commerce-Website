import { Col, Row } from "react-bootstrap"
import { products } from "../products"

function Store(){

    //array conating products for sale mapped into columns
    const productElements = products.map((product,index) =>
     <Col key={index} id={product.id} align='center'>
        <h1>{product.name}</h1>
        <h4>${product.price}</h4>
     </Col> )

    return(
        <div className="store">
            <h1 className="p-4">Welcome to our Store!</h1>
            <Row xs={1} md={3} className="g-5">
                {productElements}
            </Row>
        </div>
    )
}

export default Store