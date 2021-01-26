import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

const ProductItem = props => {
    const { product } = props;
    return(
        <Card>
            <Card.Img variant="top" src={"http://localhost:8000/static/img/product1.jpg"} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProductItem