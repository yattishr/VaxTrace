import React, { Component, useEffect, useState } from 'react'

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, NavbarBrand } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { API, graphqlOperation } from 'aws-amplify';
//import Infant list component
import InfantList from './listInfant';

export default class infant extends Component {

    render() {

        return (
            <div>
                <Container>
                    <h1 className="display-4 my-3"><span className="text-light">Infant Dashboard</span></h1>
                    <div>
                    <Row className="justify-content-md-center my-5">
                        <Col>
                          <Link to="/infant/addInfant" className="btn btn-warning">Add Infant</Link>
                        </Col>

                        <Col>
                            <Link to="/infant/listInfant" className="btn btn-warning">List Infant</Link>
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
