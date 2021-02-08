import React, { Component } from 'react'
import ProductItem from './productItem'
import {Card, CardColumns} from 'react-bootstrap'

export default class ProductList extends Component {
    // please run the django server for data. the objects provided below are samples.
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
                <Card.Img variant="top" src={"images/fashion1.jpg"} />
                <Card.Body>
                    <Card.Title>One</Card.Title>
                </Card.Body>
            </Card>
            <Card border="light">
                <Card.Img variant="top" src={"images/fashion2.jpg"} />
                <Card.Body>
                    <Card.Title>Two</Card.Title>
                </Card.Body>
            </Card>
            <Card border="light">
                <Card.Img variant="top" src={"images/fashion3.jpg"} />
                <Card.Body>
                    <Card.Title>Three</Card.Title>
                </Card.Body>
            </Card>
            </CardColumns>
        );
    }
}