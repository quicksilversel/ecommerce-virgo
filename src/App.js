import './App.css'
import React from 'react'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Jumbotron, Col, Row} from 'react-bootstrap'

// components
import Header from './components/header'
import NavBar from './components/navbar'
import ProductList from './components/productList'
import Footer from './components/footer'



function App() {
  return (
    <div className="App">
        <Header></Header>
        <NavBar></NavBar>
        <img src={"images/featured2.jpg"}></img>
      <Container id="products">
          <h1 className="text-center">Featured</h1>
          <ProductList></ProductList>
      </Container>
      <Container fluid id="footer">
        <Footer></Footer>
      </Container>
    </div>
  );
}

export default App;
