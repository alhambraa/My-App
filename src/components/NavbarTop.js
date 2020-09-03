import React from 'react'
import { Navbar, Nav} from 'react-bootstrap';

const NavbarTop = () => {
    return (
        <Navbar bg="secondary" variant="light">
        <Navbar.Brand href="#home"><b>QTemu</b></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Create Meetup</Nav.Link>
          <Nav.Link href="#features">Explore</Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link href="#features">Login</Nav.Link>
        </Nav>
      </Navbar>
    )
};

export default NavbarTop;
