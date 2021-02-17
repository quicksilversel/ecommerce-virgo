import './App.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom';

// PAGES
import Home from './pages/home';
import Collections from './pages/collections';
import ProductDetails from './pages/productDetails';
import About from './pages/about';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';

// login context
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

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/collections' component={Collections}></Route>
        <Route exact path='/collections/:id' component={ProductDetails}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/login' component={LoginPage}></Route>
        <Route exact path='/signup' component={SignupPage}></Route>
      </Switch>
    </AuthContext.Provider>

  );
}

export default App;
