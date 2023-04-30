import { useState } from "react"
import { Button, Modal, Navbar } from "react-bootstrap"

function NavBarComponent(){
    
    //state variables
    const [showModal, setShowModal] = useState(false)

    //functions to open/close cart modal
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)
    
    return(
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="/">Kafe</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button onClick={openModal}>Cart</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>This is the our cart modal!!!</h1>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NavBarComponent