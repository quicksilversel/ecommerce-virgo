import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AuthContext = React.createContext();
const initialState = {
  logged_in : false,
  user: null,
  token: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", JSON.stringify(action.payload.token));
        return {
            ...state,
            logged_in : true,
            user: action.payload.user,
            token: action.payload.token
      };
    case "LOGOUT":
        localStorage.clear();
        return {
            ...state,
            logged_in: false,
            user: null
        };
    default:
        return state;
    }
};

const Header = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return(
        <AuthContext.Provider value={{ state, dispatch }}>
            <Navbar fixed="top" id="header" expand="sm">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#link" style={{color: "white"}}><b>CART</b></Nav.Link>
                        {!state.logged_in ? 
                        <Nav.Link as={Link} to="/login" style={{color: "white"}}><b>LOGIN</b></Nav.Link> : 
                        <Nav.Link as={Link} to="/login" style={{color: "white"}}><b>LOGOUT</b></Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </AuthContext.Provider>
    )
}

export default Header;