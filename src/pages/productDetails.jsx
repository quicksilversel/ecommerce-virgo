import { React, Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Header from './components/header'
import NavBar from './components/navbar'
import Footer from './components/footer'

export default class ProductDetails extends Component {
    render(){
        return(
            <div class="products">
                <Header/>
                <NavBar/>
                <Container id="productdetails">
                    <Row>
                        <Col sm={8}>
                            <img src={"images/fashion1.jpg"}></img>
                        </Col>
                        <Col sm={4}>
                            <h1 id="productname">One</h1>
                            <h3 id="productprice">$200</h3>
                            <p id="productdescription">Description goes here</p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid id="footer">
                    <Footer/>
                </Container>
            </div>
        )
    }
}