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
        let imageURL = product.image.replace("/Users/zoe/portfolio/react_ecommerce/public","");
        return(
            <div class="products">
                <Header/>
                <NavBar/> 
                <Container id="productdetails">
                    <Row>
                        <Col sm={8}>
                            <img className="text-center" src={imageURL}/>
                        </Col>
                        <Col sm={4}>
                            <h1 id="productName">{product.name}</h1>
                            <h3 id="productPrice">${product.price}</h3>
                            <p id="productDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit vitae mi in lacinia. Suspendisse luctus lacus id velit rutrum, sit amet porta nibh luctus. Sed condimentum purus vel ante mattis, at tincidunt erat molestie. Proin odio est, porttitor ac euismod vitae, tincidunt vitae magna. Etiam quis consectetur eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas sed porttitor libero.
                            Nulla vitae nisl ut quam ornare viverra. </p>
                            <a href="#" id="cartButton">Add To Cart</a>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default ProductDetails