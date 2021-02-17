import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../App'

const Header = () => {
    const {state, dispatch} = React.useContext(AuthContext);
    const handleLogout = event => {
        dispatch({type:"LOGOUT"})
    }
    return(
        <Navbar fixed="top" id="header" expand="sm">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#link" style={{color: "white"}}><b>CART</b></Nav.Link>
                    {!state.logged_in ? 
                    <Nav.Link as={Link} to="/login" style={{color: "white"}}><b>LOGIN</b></Nav.Link> : 
                    <Nav.Link onClick={(e=>handleLogout(e, dispatch))} style={{color: "white"}}><b>LOGOUT</b></Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;