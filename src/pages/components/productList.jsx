import React, { Component, useEffect, useState } from 'react'
import ProductItem from './productItem'
import SearchBar from './searchBar'
import {Card, CardColumns} from 'react-bootstrap'

const ProductList = (props) => {
    const [input, setInput] = useState('');
    const [productListDefault, setProductListDefault] = useState([]);
    const [productList, setProductList] = useState([]);
  
    const fetchData = async () => {
      return await fetch('http://localhost:8000/api/product/')
        .then(response => response.json())
        .then(data => {
           setProductList(data) 
           setProductListDefault(data)
         });}
  
    const updateInput = async (input) => {
       const filtered = productListDefault.filter(product => {
        return product.name.toLowerCase().includes(input.toLowerCase())
       })
       setInput(input);
       setProductList(filtered);
    }
  
    useEffect( () => {fetchData()},[]);
    return(
        <>
        <SearchBar        
        keyword={input} 
        setKeyword={updateInput}/>
        <CardColumns>
            {productList.map( product => (
                <ProductItem product={product}/>
            ))}
        </CardColumns>
        </>
    );

}

export default ProductList

// sample products for viewing purpose. please connect to django server for products data.

/* 
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
*/