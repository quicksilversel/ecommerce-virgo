import React, { Component } from 'react'
import ProductItem from './productItem'
import {Card, CardColumns, Row, Col, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
    render(){
        return(
            <Container id="productlist">
                <Row>
                    <Col sm={4}>
                        <Card border="light">
                            <Card.Img variant="top" src={"images/fashion1.jpg"} />
                            <Card.Body>
                                <Card.Title as={Link} to="/products">One</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card border="light">
                            <Card.Img variant="top" src={"images/fashion2.jpg"} />
                            <Card.Body>
                                <Card.Title>Two</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card border="light">
                            <Card.Img variant="top" src={"images/fashion3.jpg"} />
                            <Card.Body>
                                <Card.Title>Three</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}