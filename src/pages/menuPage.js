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

export default class MenuPage extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="justify-content-md-center my-3">
                        <h1>VaxTrace - Menu Page</h1>
                    </Row>
                    <Row className="justify-content-md-center">
                    <Col>
                            <Card border="primary" style={{ width: '18rem' }}>
                            <img src={stetoscopeLogo} alt="Logo" style={{ width: 150, height: 150, display: 'block', margin: 'auto' }} />
                            <Card.Body>
                                <Card.Text>
                                    <h3>Doctors</h3>
                                </Card.Text>
                            </Card.Body>
                            <Link to="/doctor" className="btn btn-primary">Doctors Dashboard</Link>
                            </Card>                        
                        </Col>

                        <Col>
                            <Card border="primary" style={{ width: '18rem' }}>
                            <img src={parentsbabyLogo} alt="Logo" style={{ width: 150, height: 150, display: 'block', margin: 'auto' }} />
                            <Card.Body>
                                <Card.Text>
                                <h3>Parents</h3>
                                </Card.Text>                                
                            </Card.Body>
                            <Link to="/parent" className="btn btn-primary">Parent Dashboard</Link> 
                            </Card>                        
                        </Col>

                        <Col>
                            <Card border="primary" style={{ width: '18rem' }}>
                            <img src={babyLogo} alt="Logo" style={{ width: 150, height: 150, display: 'block', margin: 'auto' }} />
                            <Card.Body>
                                <Card.Text>
                                <h3>Infants</h3>
                                </Card.Text>                                
                            </Card.Body>
                            <Link to="/vaccine" className="btn btn-primary">Vaccine Dashboard</Link>
                            </Card>                        
                        </Col>                  
                                                
                    </Row>
                </Container>
            </div>
        )
    }
}
