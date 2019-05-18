import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

function Menu() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Nav>
                <Nav.Link href="#startup">Featured Startups</Nav.Link>

                <NavDropdown title="Green Products" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/1.1">Home & Living</NavDropdown.Item>
                    <NavDropdown.Item href="#action/1.2">Bathroom</NavDropdown.Item>
                    <NavDropdown.Item href="#action/1.3">Green</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#recycle">Recycle Requests/Pickups</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Menu;

