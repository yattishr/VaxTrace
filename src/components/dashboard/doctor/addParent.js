import React, { Component, useEffect, useState, Fragment } from 'react'

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
import { createParent } from '../../../graphql/mutations';


// below code is used for testing purposes only.
const addParentData = `mutation addNewParent {
  createParent(input: 
    {
      medicalrepID: "4", 
      firstName: "micket", 
      lastName: "mouse", 
      noOfInfants: 1, 
      emailAddress: "mickeymouse@gmail.com", 
      contactNumber: "0742532694", 
      titleField: "Mr", 
      dateOfBirtth: "18-Aug-1982", 
      idNumber: "8007155160080", 
      physicalAddress: "14 Valentines Road, Disneyland"
    }
  ) {
    id
  }
}
`;


export default class addParent extends Component {

    state = { 
      formTitleField: '',
      formFirstName: '',
      formLastName: '',
      formEmail: '',
      formContactNumber: '',
      formNoInfants: '',
      formIdentitynum: '',
      formAddress1: '',
      formDateBirth: '',
      parents: []     
    }

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
      console.log("First name: " + this.state.formFirstName + " Last name: " + this.state.formLastName)
    };


    handleSubmit = (e) => {
      var parentDetails = {
        firstname: this.state.formFirstName,
        lastname: this.state.formLastName,
        title: this.state.formTitleField,
        email: this.state.formEmail,
        contact: this.state.formContactNumber,
        noinfants: this.state.formNoInfants,
        identitynum: this.state.formIdentitynum,
        physicaladdress: this.state.formAddress1,
        dateofbirth: this.state.formDateBirth
      }
      console.log("Parent Details: " + JSON.stringify(parentDetails))
      API.graphql(graphqlOperation(createParent, {input: parentDetails} ));
      console.log('Parent details added successfully!')
    }

    createParent = async () => {
      const {firstname, lastname, noOfInfants, emailAddress, 
        contactNumber, titleField, dateOfBirtth, idNumber, physicalAddress
      } = this.state
      if (firstname === '' || lastname === '') return
      try {
          const parent = {firstname, lastname, noOfInfants, emailAddress, 
            contactNumber, titleField, dateOfBirtth, idNumber, physicalAddress}
          const parents = [...this.state.parents, parent]
          this.setState({ parents, 
            formTitleField: '',
            formFirstName: '',
            formLastName: '',
            formEmail: '',
            formContactNumber: '',
            formNoInfants: '',
            formIdentitynum: '',
            formAddress1: '',
            formDateBirth: ''
          })
          await API.graphql(graphqlOperation(createParent, {input: parent} ))
          console.log('parent successfully created!')
      } catch (err) {
        <h1>Ooops....there was an erorr saving the Parent data!</h1>
        console.log('error: ', err)
      }
    }

    render() {
        return (
            <div>
                <h1 className="my-2"><span className="text-light">Parent </span>Dashboard</h1>
                <h4>Add <span className="text-light">Parent</span></h4>
                <Container>
                  <Form>
                    <Form.Row>
                      <Col>
                        <Form.Group controlId="exampleForm.SelectCustom">
                          <Form.Label>Title</Form.Label>
                          <Form.Control as="select" name="formTitleField" custom>
                            <option>Mr</option>
                            <option>Mrs</option>
                            <option>Ms</option>
                            <option>Dr</option>
                          </Form.Control>
                        </Form.Group>                      
                      </Col>

                      <Col>
                        <Form.Group>
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="First name" onChange={this.handleChange('formFirstName')} name="formFirstName" />
                        </Form.Group>                       
                      </Col>

                      <Col>
                        <Form.Group>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Last name" onChange={this.handleChange('formLastName')} name="formLastName" />
                        </Form.Group>                      
                      </Col>                      
                    </Form.Row>

                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange('formEmail')} name="formEmail" />
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>                      
                      </Col>

                      <Col>
                        <Form.Group>
                          <Form.Label>Contact number</Form.Label>
                          <Form.Control type="text" placeholder="+99 123 456 7890" onChange={this.handleChange('formContactNumber')} name="formContactNumber" />
                        </Form.Group>                      
                      </Col>

                      <Col>
                        <Form.Group>
                          <Form.Label>Number of Infants</Form.Label>
                          <Form.Control type="number" placeholder="Number of Infants" onChange={this.handleChange('formNoInfants')} name="formNoInfants" />
                        </Form.Group>                      
                      </Col>
                    </Form.Row>

                    <Form.Row>
                      <Col>
                      <Form.Group>
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="text" placeholder="12-Nov-2001" onChange={this.handleChange('formDateBirth')} name="formDateBirth" />
                        <Form.Text className="text-muted">
                            DD-MM-YYYY
                          </Form.Text>
                      </Form.Group>
                      </Col>
                      <Col>
                      <Form.Group>
                        <Form.Label>National Identity / Passport Number</Form.Label>
                        <Form.Control type="text" placeholder="Identity / Passport Number" onChange={this.handleChange('formIdentitynum')} name="formIdentitynum" />
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
                      <Form.Group as={Col}>
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder="New York City" onChange={this.handleChange('formCity')} name="formCity" />
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange('formState')} name="formState"   defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>CA</option>
                        <option>ZA</option>
                        <option>FA</option>                        
                        <option>DA</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label>Zip</Form.Label>
                        <Form.Control onChange={this.handleChange('formZip')} name="formZip"/>
                      </Form.Group>
                    </Form.Row>

                    <Form.Group>
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                     
                    <Form.Row>
                      <Col>
                        <Link to="/doctor" className="btn btn-warning">Back</Link>  
                      </Col>
                      <Col>
                      <Button onClick={this.handleSubmit} variant="primary" type="submit">
                        Submit
                      </Button>                      
                      </Col>                      
                    </Form.Row>
                  </Form>
                </Container>
            </div>
        )
    }
}
