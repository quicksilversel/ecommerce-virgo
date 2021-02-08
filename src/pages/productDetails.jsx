import { React, Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Header from './components/header'
import NavBar from './components/navbar'
import Footer from './components/footer'

class ProductDetails extends Component {
    constructor(props){
        super(props);
        this.state = { 
            products : null
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
        if (!this.state.products) {
            return <div />
        }
        const product = this.state.products.find(p => p.id.toString() === this.props.match.params.id)
        let imageURL = product.image.replace("/Users/zoe/portfolio/react_ecommerce/public/","");
        return(
            <div class="products">
                <Header/>
                <NavBar/> 
                <Container id="productdetails">
                    <Row>
                        <Col sm={8}>
                            <img src={imageURL}/>
                        </Col>
                        <Col sm={4}>
                            <h1 id="productname">{product.name}</h1>
                            <h3 id="productprice">${product.price}</h3>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default ProductDetails