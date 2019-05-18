import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

const noDecorationLink = {
  textDecoration: 'none',
  color: 'rgba(255,255,255,.5)'
}

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
    <Nav>
    <Nav.Link className="mx-5" href="features">Featured Research/Startups</Nav.Link>

    <NavDropdown title="Green Products" id="nav-dropdown" className="mx-5">
    <NavDropdown.Item href="products">Home & Living</NavDropdown.Item>
    <NavDropdown.Item>Clothing and Apparels</NavDropdown.Item>
    <NavDropdown.Item>Food & Beverage Packaging</NavDropdown.Item>
    <NavDropdown.Item>Utensiles and Containers</NavDropdown.Item>
    <NavDropdown.Item>Others</NavDropdown.Item>
    </NavDropdown>

    <NavDropdown title="Recycle Material Requests/Pickups" id="nav-dropdown" className="mx-5">
    <NavDropdown.Item href="waste">Electronic Waste</NavDropdown.Item>
    <NavDropdown.Item>Food Waste</NavDropdown.Item>
    <NavDropdown.Item>Old Clothes/Fabrics</NavDropdown.Item>
    <NavDropdown.Item>Plastic</NavDropdown.Item>
    <NavDropdown.Item>Others</NavDropdown.Item>
    </NavDropdown>

    <NavDropdown title="Events" id="nav-dropdown" className="mx-5">
    <NavDropdown.Item>Cleanup Day</NavDropdown.Item>
    <NavDropdown.Item>Item Swap</NavDropdown.Item>
    <NavDropdown.Item>Tree Planting</NavDropdown.Item>
    <NavDropdown.Item>Others</NavDropdown.Item>
    </NavDropdown>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu;
