import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/header'
import NavBar from './components/navbar'
import ProductList from  './components/productList'
import Footer from './components/footer'
import SearchBar from './components/searchBar'


export default class Collections extends Component {
    render(){
        return(
            <div className="collections">
                <Header></Header>
                <NavBar></NavBar>
                <Container id="productlist">
                    <ProductList></ProductList>
                </Container>
                <Footer></Footer>
            </div>
        )
    }
}