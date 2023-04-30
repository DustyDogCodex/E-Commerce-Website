import { Col, Row } from "react-bootstrap"
import { products } from "../products"
import ProductCard from "../components/ProductCard"

function Store(){

    //array conating products for sale mapped into columns
    const productElements = products.map((product,index) =>
     <Col key={index} id={product.id} align='center'>
        <ProductCard id={product.id} name={product.name} price={product.price} />
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