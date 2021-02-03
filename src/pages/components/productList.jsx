import React, { Component } from 'react'
import ProductItem from './productItem'
import {Card, CardColumns, Row, Col} from 'react-bootstrap'

export default class ProductList extends Component {
    render(){
        return(
            <CardColumns>
                <Card border="light">
                    <Card.Img variant="top" src={"images/sample1.jpg"} />
                    <Card.Body>
                        <Card.Title>One</Card.Title>
                    </Card.Body>
                </Card>
                <Card border="light">
                    <Card.Img variant="top" src={"images/sample2.jpg"} />
                    <Card.Body>
                        <Card.Title>Two</Card.Title>
                    </Card.Body>
                </Card>
                <Card border="light">
                    <Card.Img variant="top" src={"images/sample3.jpg"} />
                    <Card.Body>
                        <Card.Title>Three</Card.Title>
                    </Card.Body>
                </Card>
            </CardColumns>
        );
    }
}