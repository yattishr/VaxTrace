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


const listParentRecords = `query MyQuery {
    listParents {
      items {
        firstName
        lastName
        titleField
        contactNumber
        noOfInfants
      }
    }
  }`;

  export const listParents = /* GraphQL */ `
  query ListParents(
    $filter: ModelParentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        idNumber
        dateOfBirtth
        contactNumber
        emailAddress
        physicalAddress
        titleField
        noOfInfants
        medicalrepID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;


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


function handleParamChange(e) {
  const param = e.target.name
  const value = e.target.value
  // setParams(prevParams => {
  //   return { ...prevParams, [param]: value }
  // })
}  


export default class addParent extends Component {

    state = { 
        firstname: '',
        lastname: '',
        noOfInfants: '', 
        emailAddress: '', 
        contactNumber: '', 
        titleField: '', 
        dateOfBirtth: '', 
        idNumber: '', 
        physicalAddress: '',   
        parents: []     
    }

    onChange = e => {
      this.setState({ [e.target.name]: e.target.value })
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
            firstname: '',
            lastname: '',
            noOfInfants: '', 
            emailAddress: '', 
            contactNumber: '', 
            titleField: '', 
            dateOfBirtth: '', 
            idNumber: '', 
            physicalAddress: '',          
          })
          await API.graphql(graphqlOperation(createParent, {input: parent} ))
          console.log('parent successfully created!')
      } catch (err) {
        <h1>Ooops....there was an erorr saving the Parent data!</h1>
        console.log('error: ', err)
      }
    }

    addQuery = async () => {
        const todoDetails = {
          name: 'Party tonight!',
          description: 'Amplify CLI rocks!'
        };
      const newParentRecord = await API.graphql(graphqlOperation(addParentData));
      console.log(JSON.stringify(newParentRecord));
      };    

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
                          <Form.Control as="select" custom>
                            <option>Mr</option>
                            <option>Mrs</option>
                            <option>Ms</option>
                            <option>Dr</option>
                          </Form.Control>
                        </Form.Group>                      
                      </Col>

                      <Col>
                        <Form.Group controlId="formBasicFirstname">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="First name" />
                        </Form.Group>                       
                      </Col>

                      <Col>
                        <Form.Group controlId="formBasicLasttname">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Last name" />
                        </Form.Group>                      
                      </Col>                      
                    </Form.Row>

                    <Form.Row>
                      <Col>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>                      
                      </Col>

                      <Col>
                        <Form.Group controlId="formBasicContactnumber">
                          <Form.Label>Contact number</Form.Label>
                          <Form.Control type="text" placeholder="+99 123 456 7890" />
                        </Form.Group>                      
                      </Col>

                      <Col>
                        <Form.Group controlId="formBasicFirstname">
                          <Form.Label>Number of Infants</Form.Label>
                          <Form.Control type="number" placeholder="Number of Infants" />
                        </Form.Group>                      
                      </Col>
                    </Form.Row>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>National Identity / Passport Number</Form.Label>
                      <Form.Control type="text" placeholder="Identity / Passport Number" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control placeholder="1234 Main St" />
                    </Form.Group>                    

                    <Form.Group controlId="formGridAddress2">
                      <Form.Label>Address 2</Form.Label>
                      <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>                    

                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder="New York City"/>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>CA</option>
                        <option>ZA</option>
                        <option>FA</option>                        
                        <option>DA</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                     
                    <Form.Row>
                      <Col>
                        <Link to="/" className="btn btn-warning">Back</Link>  
                      </Col>
                      <Col>
                      <Button variant="primary" type="submit">
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
