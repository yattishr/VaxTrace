import React, { Component, useEffect, useState } from 'react'

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, NavbarBrand } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

// import AWS components
import { API, graphqlOperation } from 'aws-amplify';

// import GraphQL Queries
import queries from '../../../graphql/mutations';
import { createInfant } from '../../../graphql/mutations';

export default class addInfant extends Component {

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
        console.log("First name: " + this.state.formFirstName + " Last name: " + this.state.formLastName)
      };    


    render() {
        return (
            <div>
                <h1 className="display-4 my-3">Add Infant</h1>
                <Container>
                <Form>
                    <Form.Row>
                    <Col>
                        <Form.Group>
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="First name" name="formFirstName" />
                        </Form.Group>                       
                      </Col>

                      <Col>
                        <Form.Group>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Last name" name="formLastName" />
                        </Form.Group>                      
                      </Col>                        
                    </Form.Row>

                    <Form.Row>
                        <Col>
                        <Form.Group>
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="text" placeholder="12-Nov-2001" name="formDateBirth" />
                            <Form.Text className="text-muted">
                                DD-MM-YYYY
                            </Form.Text>
                        </Form.Group>                        
                        </Col>

                        <Col>
                        <Form.Group as={Col}>
                            <Form.Label>Gender</Form.Label>
                            <Form.Control as="select" name="formGender" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Control>
                        </Form.Group>
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Col>
                        <Form.Group>
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" placeholder="Age" name="formAge" />
                        </Form.Group>                        
                        </Col>

                        <Col>
                        <Form.Group as={Col}>
                            <Form.Label>Months / Years</Form.Label>
                            <Form.Control as="select" name="formAgeSelect" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Months</option>
                                <option>Years</option>
                            </Form.Control>
                        </Form.Group>
                        </Col>

                        <Col>
                        <Form.Group>
                            <Form.Label>Height</Form.Label>
                            <Form.Control type="number" placeholder="Height" name="formHeight" />
                        </Form.Group>                        
                        </Col>

                        <Col>
                        <Form.Group>
                            <Form.Label>Weight</Form.Label>
                            <Form.Control type="number" placeholder="Weight" name="formDateBirth" />
                        </Form.Group>
                        </Col>
                    </Form.Row>

                    <Form.Group>
                      <Form.Label>Address</Form.Label>
                      <Form.Control placeholder="1234 Main St" onChange={this.handleChange('formAddress1')} name="formAddress1" />
                    </Form.Group>                    

                    <Form.Group>
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" onChange={this.handleChange('formAddress2')} name="formAddress2"  />
                    </Form.Group>

                    <Form.Row>
                    <Col>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>                      
                    </Col>
                    <Col>
                        <Link to="/infant" className="btn btn-warning">Back</Link>  
                    </Col>                      
                    </Form.Row>

                </Form>







                </Container>
            </div>
        )
    }
}