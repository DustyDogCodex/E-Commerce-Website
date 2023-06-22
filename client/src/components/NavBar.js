import { useContext, useState } from "react"
import { Button, Modal, Navbar } from "react-bootstrap"
import { CartContext } from "../CartContext"
import ItemInCart from "./ItemInCart"
import axios from 'axios'

function NavBarComponent(){
    
    //using context from CartContext.js to keep track of our cart
    const cartContext = useContext(CartContext)

    //state variables
    const [showModal, setShowModal] = useState(false)

    //functions to open/close cart modal
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    //count of products in cart
    const itemCount = cartContext.productsInCart.reduce((prev,curr) => prev + curr.quantity, 0)

    //function for checking out with items currently in the cart
    async function checkout(){
        await axios.post('http://localhost:5000/checkout',
            { items: cartContext.productsInCart }
        )
        .then(res => {
            //once server creates a stripe session and sends us the session url, we can pass it to react and relocate the user to that url
            if(res.data.url) {
                window.location.assign(res.data.url)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    return(
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="/">Kafe</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button onClick={openModal}>Cart ({itemCount} Items)</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {itemCount > 0 
                    ? 
                        <>
                            <p>Items in cart:</p>
                            {cartContext.productsInCart.map((product,index) => 
                               
                               <ItemInCart key={index} id={product.id} quantity={product.quantity} /> 
                               
                               )
                            }

                            <h1>Total: {cartContext.totalCost().toFixed(2)}</h1>

                            <Button 
                                variant="success"
                                onClick={checkout}
                            >
                                Checkout
                            </Button>
                        </>
                    :
                        <h1>There are no items in your cart.</h1>
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NavBarComponent