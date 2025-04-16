import "./Header.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header () {
    return (
        <>
    <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="custom-nav-link" href="/home">Home</Nav.Link>
            <Nav.Link className="custom-nav-link" href="/about">About</Nav.Link>
            <Nav.Link className="custom-nav-link" href="#link">Projects</Nav.Link>
            <Nav.Link className="custom-nav-link" href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
}