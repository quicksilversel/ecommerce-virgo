import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

export default class Sidebar extends Component {
    render(){
        return(
            <div style={{ backgroundColor: "white"}}>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav>
            </div>
        )
    }
}