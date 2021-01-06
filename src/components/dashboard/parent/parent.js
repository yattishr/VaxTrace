import React, { Component, useEffect, useState } from 'react'

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, NavbarBrand } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import AWS components
import { API, graphqlOperation } from 'aws-amplify';

// import Parent list component
import ParentList from './listParent';

export default class parent extends Component {

    render() {
        
        return (
            <div>
                <Container>
                    <h1 className="display-4 my-3"><span className="text-light">Parent Dashboard</span></h1>
                    <div>
                    <Row className="justify-content-md-center my-5">
                        <Col>
                          <Link to="/parent/addparent" className="btn btn-warning">Add Parent</Link> 
                        </Col>

                        <Col>
                            <Link to="/parent/listparent" className="btn btn-warning">List Parent</Link> 
                        </Col>                            

                        <Col>
                            <Link to="/" className="btn btn-warning">Back</Link> 
                        </Col>                        
                    </Row>
                    </div>                    
                </Container>
            </div>
        )
    }
}
