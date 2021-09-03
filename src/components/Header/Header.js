import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.png';
import logo1 from './pokemon.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="warning" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="300px"
                        height="270px"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <h3><Nav.Link href="#pokemon">Pokemon's</Nav.Link></h3>
                        <h3><Nav.Link href="#types">Types</Nav.Link></h3>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand>
                    <img
                        src={logo1}
                        width="300px"
                        height="270px"
                        className="d-inline-block align-top"
                        alt="picture"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;