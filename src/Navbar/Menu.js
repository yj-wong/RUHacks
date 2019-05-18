import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

function Menu() {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="justify-content-center">
                <Nav.Link href="#pricing">Featured Startups</Nav.Link>
                <Nav.Link href="#home">Green Products</Nav.Link>
                <Nav.Link href="#features">Recycle Requests/Pickups</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Menu;

