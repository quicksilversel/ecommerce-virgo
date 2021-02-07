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
                        <Col sm={6}>
                            <h1>About Us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit vitae mi in lacinia. Suspendisse luctus lacus id velit rutrum, sit amet porta nibh luctus. Sed condimentum purus vel ante mattis, at tincidunt erat molestie. Proin odio est, porttitor ac euismod vitae, tincidunt vitae magna. Etiam quis consectetur eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas sed porttitor libero.
                            Nulla vitae nisl ut quam ornare viverra. Sed ultrices mauris quis lectus suscipit placerat. Curabitur sollicitudin venenatis pulvinar. Vivamus ultricies mi eget velit imperdiet hendrerit. Vivamus molestie gravida vestibulum. Suspendisse fermentum quis est eget aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus congue interdum sagittis. Nulla suscipit mi urna, a auctor mauris pulvinar sed. Maecenas venenatis magna ut nulla consequat efficitur. Donec ut erat porttitor justo vulputate dictum. Nulla ultrices, odio at lobortis tempus, quam felis bibendum nunc, ac euismod purus ipsum id enim. Morbi porta lectus neque, eget auctor justo faucibus nec. Nullam at ultricies ante. Pellentesque convallis tincidunt mauris, at efficitur odio sagittis quis.
                            Phasellus tincidunt vitae urna sit amet cursus. Vestibulum suscipit porta augue. Maecenas euismod lectus mauris. Nulla congue sollicitudin pretium. In malesuada nunc sit amet velit tristique cursus. Praesent condimentum arcu dolor. Suspendisse potenti. Suspendisse potenti.
                            Sed ac pulvinar lectus. Vestibulum nec tellus scelerisque tellus faucibus vehicula. Pellentesque eu tortor eu odio volutpat elementum. Integer urna tortor, eleifend quis consectetur non, condimentum nec eros. Vestibulum aliquet maximus posuere. Nulla tincidunt lacus a ante sagittis, sit amet pharetra augue mattis. Quisque ut porttitor erat, id viverra felis. Duis faucibus libero id aliquam placerat. Maecenas a tempor ipsum. Nunc nec nunc sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus at magna nisi.
                            Aliquam porttitor porta magna, a facilisis tellus maximus non. Duis eget mattis dui. Vestibulum consectetur in erat eu egestas. Nulla fringilla turpis eu erat dictum, at eleifend lectus viverra. Etiam ac viverra dui, vel blandit nunc. Donec pulvinar placerat leo, vel ultricies libero maximus at. Aliquam efficitur leo ac mauris volutpat dignissim. Etiam rutrum lectus vitae ipsum mattis condimentum. Vivamus quis nisi nisl. Integer ac ipsum leo. Suspendisse hendrerit tincidunt pharetra. Aenean mattis commodo pulvinar.
                            </p>
                        </Col>
                        <Col sm={6}>
                            <img src="images/fashion1.jpg" style={{paddingLeft: "10%"}}></img>
                        </Col>
                    </Row>
                </Container>
                <Footer></Footer>
            </div>
        );
    }
}