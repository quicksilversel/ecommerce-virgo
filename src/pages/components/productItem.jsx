import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ProductItem = props => {
    const { product } = props;
    let imageURL = product.image.replace("/Users/zoe/portfolio/react_ecommerce/public/","");
    return(
        <Card border="light" key={product.id}>
            <Link to={`/collections/${product.id}`}>
                <Card.Img variant="top" src={imageURL}/>
            </Link>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProductItem