import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render(){
        return(
            <Navbar fixed="top" id="navbar" expand="lg">
                <Navbar.Brand as={Link} to="/">Virgo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/collections">Shop</Nav.Link>
                    <Nav.Link href="#link">Magazine</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}