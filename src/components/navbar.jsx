import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

export default class NavBar extends Component {
    render(){
        return(
            <Navbar fixed="top" id="navbar" expand="lg">
                <Navbar.Brand href="#home">Virgo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <NavDropdown title="Shop" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Featured</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">New</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Photography</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link">Contact</Nav.Link>
                    <Nav.Link href="#link">Magazine</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}