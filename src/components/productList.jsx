import React, { Component } from 'react'
import ProductItem from './productItem'
import CardColumns from 'react-bootstrap/CardColumns'

export default class ProductList extends Component {
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
            </CardColumns>
        );
    }
}