import React, { Component, useEffect, useState } from 'react'

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, NavbarBrand } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import AWS components
import { API, graphqlOperation } from 'aws-amplify';

export default class infant extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4 my-3">Infant Dashboard</h1>
            <Container>
            <Row className="justify-content-md-center my-5">
                        <Col>
                            <Link to="/infant/listinfant" className="btn btn-warning">List Infants</Link> 
                        </Col>                            

                        <Col>
                            <Link to="/infant/addinfant" className="btn btn-warning">Add Infant</Link> 
                        </Col>                        

                        <Col>
                            <Link to="/" className="btn btn-warning">Back</Link> 
                        </Col>                        
                    </Row>                
            </Container>

            </div>


        )
    }
}
