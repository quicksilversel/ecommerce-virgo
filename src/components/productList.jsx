// product body 

import React, { Component } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'

export default class ProductList extends Component {
    render(){
        return(
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>"Product 1"</Card.Title>
                        <Card.Text>"$2.99"</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>"Product 2"</Card.Title>
                        <Card.Text>"$5.99"</Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
        )
    }
}