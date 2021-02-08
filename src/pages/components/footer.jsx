import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'

export default class Footer extends Component {
    render(){
        return(
            <Container fluid id="footer">
                <Row id="logo">
                    <Col>
                        <h1>Virgo</h1>
                    </Col>
                </Row>
                <Row id="company-info">
                        <Col sm={2} ><a href="#">NewsLetter</a></Col>
                        <Col sm={2}><a href="#">Contact</a></Col>
                        <Col sm={2}><a href="#">App</a></Col>
                        <Col sm={2}><a href="#">Follow Us</a></Col>
                        <Col sm={2}><a href="#">Privacy</a></Col>
                        <Col sm={2}><a href="#">Cookies</a></Col>
                    </Row>
                <Row>
                    <Col id="copyright">
                        <p>© 2021 Virgo, Inc. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
