
import React, { Component, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, NavbarBrand } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { API, graphqlOperation } from 'aws-amplify';

import AddVaccine from './addVaccine';
import ListVaccine from './listVaccine';


export default class vaccine extends Component {
  render() {

      return (
          <div>
              <Container>
                  <h1 className="display-4 my-3"><span className="text-light">Vaccine Dashboard</span></h1>
                  <div>
                  <Row className="justify-content-md-center my-5">
                      <Col>
                        <Link to="/vaccine/addVaccine" className="btn btn-warning">Add Vaccine</Link>
                      </Col>

                      <Col>
                          <Link to="/vaccine/listVaccine" className="btn btn-warning">List Vaccine</Link>
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
