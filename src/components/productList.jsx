import React, { Component } from 'react'
import ProductItem from './productItem'
import {Card, CardColumns} from 'react-bootstrap'

export default class ProductList extends Component {
    // data will be retreived from django server. the samples provided below are examples.
    constructor(props){
        super(props);
        this.state = { 
            products : []
        }; 
    }
    componentDidMount() { 
        fetch('http://localhost:8000/api/product/') 
        .then(response => response.json())
        .then( data => {
            this.setState({ products : data }); 
        })
        .catch(err => {
            console.log(err);
        }) 
    } 
    render(){
        return(
            <CardColumns>
                {this.state.products.map( product => (
                    <ProductItem product={product}/>
                ))}
            <Card border="light">
                <Card.Img variant="top" src={"images/sample1.jpg"} />
                <Card.Body>
                    <Card.Title>One</Card.Title>
                    <Card.Text>$20.99</Card.Text>
                </Card.Body>
            </Card>
            <Card border="light">
                <Card.Img variant="top" src={"images/sample2.jpg"} />
                <Card.Body>
                    <Card.Title>Two</Card.Title>
                    <Card.Text>$35.99</Card.Text>
                </Card.Body>
            </Card>
            <Card border="light">
                <Card.Img variant="top" src={"images/sample3.jpg"} />
                <Card.Body>
                    <Card.Title>Three</Card.Title>
                    <Card.Text>$28.99</Card.Text>
                </Card.Body>
            </Card>
            </CardColumns>
        );
    }
}