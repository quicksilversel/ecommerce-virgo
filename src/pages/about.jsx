import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Header from './components/header'
import NavBar from './components/navbar'
import Footer from './components/footer'


export default class About extends Component {
    render(){
        return(
            <div className="about">
                <Header></Header>
                <NavBar></NavBar>
                <Container id="about">
                    <Row>
                        <Col sm={6} className="text-center">
                            <img src="images/fashion1.jpg" style={{paddingLeft: "10%"}}></img>
                        </Col>
                        <Col sm={6} style={{"padding-left":"5%"}}>
                            <h1>About Us</h1>
                            <p style={{"padding-top": "5%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit vitae mi in lacinia. Suspendisse luctus lacus id velit rutrum, sit amet porta nibh luctus. Sed condimentum purus vel ante mattis, at tincidunt erat molestie. Proin odio est, porttitor ac euismod vitae, tincidunt vitae magna. Etiam quis consectetur eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas sed porttitor libero.
                            Nulla vitae nisl ut quam ornare viverra. Sed ultrices mauris quis lectus suscipit placerat. Curabitur sollicitudin venenatis pulvinar. Vivamus ultricies mi eget velit imperdiet hendrerit. Vivamus molestie gravida vestibulum. Suspendisse fermentum quis est eget aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus congue interdum sagittis. Nulla suscipit mi urna, a auctor mauris pulvinar sed. Maecenas venenatis magna ut nulla consequat efficitur. Donec ut erat porttitor justo vulputate dictum. Nulla ultrices, odio at lobortis tempus, quam felis bibendum nunc, ac euismod purus ipsum id enim. Morbi porta lectus neque, eget auctor justo faucibus nec. Nullam at ultricies ante. Pellentesque convallis tincidunt mauris, at efficitur odio sagittis quis.
                            Phasellus tincidunt vitae urna sit amet cursus. Vestibulum suscipit porta augue. 
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Footer></Footer>
            </div>
        );
    }
}