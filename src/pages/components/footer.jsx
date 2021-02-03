import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap'

export default class Footer extends Component {
    render(){
        return(
            <>
                <Row id="logo">
                    <Col>
                        <h1>Virgo</h1>
                        <p style={{fontSize: "small"}}>A vintage photography company</p>
                    </Col>
                </Row>
                <Row id="company-info">
                        <Col sm={2} ><p>NewsLetter</p></Col>
                        <Col sm={2}><p>Contact</p></Col>
                        <Col sm={2}><p>App</p></Col>
                        <Col sm={2}><p>Follow Us</p></Col>
                        <Col sm={2}><p>Privacy</p></Col>
                        <Col sm={2}><p>Cookies</p></Col>
                    </Row>
                <Row>
                    <Col id="copyright">
                        <p>© 2021 Virgo, Inc. All rights reserved.</p>
                    </Col>
                </Row>
            </>
        )
    }
}
