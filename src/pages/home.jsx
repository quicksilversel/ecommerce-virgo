import React, { Component } from 'react'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container } from 'react-bootstrap'

// components
import Header from './components/header'
import NavBar from './components/navbar'
import Featured from './components/featured'
import Footer from './components/footer'

export default class Home extends Component {
    render(){
        return (
            <div className="App">
                <Header></Header>
                <NavBar></NavBar>
                <img src={"images/header.jpg"}></img>
              <Container id="featured">
                  <h1 className="text-center">Featured</h1>
                  <Featured></Featured>
              </Container>
              <Container fluid id="footer">
                <Footer></Footer>
              </Container>
            </div>
          );
    }
}