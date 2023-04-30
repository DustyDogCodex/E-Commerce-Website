import { Button, Navbar } from "react-bootstrap"

function NavBarComponent(){
    
    return(
        <Navbar expand="sm">
            <Navbar.Brand href="/">Kafe</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Button>Cart</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBarComponent