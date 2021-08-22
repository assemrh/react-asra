import React from 'react'
import {Navbar, Container, Row, Col, Card, Dropdown, Nav, NavDropdown } from 'react-bootstrap'

//let variant = "danger" , idx = 1
let vals =  [
    'Primary',
    'Secondary',
    'Success',
    'Danger',
    'Warning',
    'Info',
    'Light',
    'Dark',
    ]

function kartlar() {
    return (
        <>
        { vals.map((variant, idx) => (
            <Card
                bg={variant.toLowerCase()}
                key={idx}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '100%' }}
                className="mb-2"
            >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>))
            }
            </>
    )
}
function Home() {
    return (
        <Container as="main" bg="danger"  style={{float: 'right', maxWidth: '70%'}}>
            <Row className="justify-content-center">
                <Col md="auto">
                {kartlar()}
                </Col>

            </Row>
        </Container>
    )
}

export default Home
