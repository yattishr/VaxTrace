import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, NavbarBrand } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// import image assets

import logo from '../undraw_doctor.png';
import stetoscopeLogo from '../stethoscope.png';
import babyLogo from '../baby.png';
import parentsbabyLogo from '../parents_baby.png';

export default class menuPage extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                        <h1>VaxTrace - Menu Page</h1>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col>
                            <Card border="primary" style={{ width: '18rem' }}>
                            <img src={parentsbabyLogo} alt="Logo" style={{ width: 150, height: 150, display: 'block', margin: 'auto' }} />
                            <Card.Body>
                                <Card.Text>
                                <h3>Add Parent</h3>
                                </Card.Text>
                            </Card.Body>
                            </Card>                        
                        </Col>

                        <Col>
                            <Card border="primary" style={{ width: '18rem' }}>
                            <img src={babyLogo} alt="Logo" style={{ width: 150, height: 150, display: 'block', margin: 'auto' }} />
                            <Card.Body>
                                <Card.Text>
                                <h3>Vaccinate Infant</h3>
                                </Card.Text>
                            </Card.Body>
                            </Card>                        
                        </Col>                  

                        <Col>
                            <Card border="primary" style={{ width: '18rem' }}>
                            <img src={stetoscopeLogo} alt="Logo" style={{ width: 150, height: 150, display: 'block', margin: 'auto' }} />
                            <Card.Body>
                                <Card.Text>
                                    <h3>Vaccinate Log</h3>
                                </Card.Text>
                            </Card.Body>
                            </Card>                        
                        </Col>                        
                        
                    </Row>
                </Container>
            </div>
        )
    }
}
