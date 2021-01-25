// product body 

import React, { Component } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'

export default class ProductList extends Component {
    render(){
        return(
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src="/images/product1.jpg" />
                    <Card.Body>
                        <Card.Title>Product 1</Card.Title>
                        <Card.Text>$2.99</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/images/product2.jpg" />
                    <Card.Body>
                        <Card.Title>Product 2</Card.Title>
                        <Card.Text>$5.99</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/images/product3.jpg" />
                    <Card.Body>
                        <Card.Title>Product 3</Card.Title>
                        <Card.Text>$5.99</Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
        )
    }
}