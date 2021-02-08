import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel } from 'react-bootstrap';

// components
import Header from './components/header'
import NavBar from './components/navbar'
import Featured from './components/featured'
import Footer from './components/footer'

// replace link with items to be featured

export default class Home extends Component {
    render(){
        return (
            <div className="App">
                <Header></Header>
                <NavBar></NavBar>
                <Container fluid>
                <Carousel id="carousel">
                    <Carousel.Item as={Link} to="/collections/1" interval={5000}>
                        <img
                        className="d-block w-100"
                        src="images/header.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Collection 1</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item as={Link} to="/collections/2" interval={5000}>
                        <img
                        className="d-block w-100"
                        src="images/header2.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Collection 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item as={Link} to="/collections/3" interval={5000}>
                        <img
                        className="d-block w-100"
                        src="images/header3.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Collection 3</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </Container>
                <Container id="featured">
                    <h1 className="text-center">2021 S/S Collection</h1>
                    <Featured></Featured>
                </Container>
                <Footer></Footer>
            </div>
          );
    }
}