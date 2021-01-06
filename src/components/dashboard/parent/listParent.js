import React, { Component, useEffect, useState, Fragment } from 'react'

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, NavbarBrand } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import AWS components
import { API, graphqlOperation } from 'aws-amplify';


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


  const addParent = `mutation addNewParent {
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


class ParentList extends Component {

    state = { parents: [] }

    listQuery = async() => {
        try {
            const apiData = await API.graphql(graphqlOperation(listParents));
            const parents = apiData.data.listParents.items
            this.setState({ parents })
            console.log(parents)
        } catch(err) {
            <h1>There was an error fetching the data.</h1>
            console.log('error: ', err)
        }        
    }

    addQuery = async () => {
        const todoDetails = {
          name: 'Party tonight!',
          description: 'Amplify CLI rocks!'
        };
      const newParentRecord = await API.graphql(graphqlOperation(addParent));
      console.log(JSON.stringify(newParentRecord));
      };

    render() {
        return(
            <Fragment>
                <Container>
                    {
                        this.state.parents.map((parent, i) => {                            
                            return(
                                <Container>
                                    <div>
                                        <h3 className="my-3">ID Number: {parent.idNumber}</h3>
                                        <ul className="list-group">
                                            <li className="list-group-item">First Name: {parent.firstName} </li>
                                            <li className="list-group-item">Last Name: {parent.lastName}</li>
                                            <li className="list-group-item">Title: {parent.titleField}</li>
                                            <li className="list-group-item">Date of Birth: {parent.dateOfBirtth}</li>
                                            <li className="list-group-item">Contact Number: {parent.contactNumber}</li>
                                            <li className="list-group-item">Email Address: {parent.emailAddress}</li>
                                            <li className="list-group-item">Number of Infants: {parent.noOfInfants}</li>
                                        </ul>
                                        <hr />
                                        <Link to="/" className="btn btn-warning">Add Infant</Link>
                                    </div>
                                </Container>
                            )
                        })
                    }

                    <Row className="justify-content-md-center my-5">
                        <Col>
                            <Button variant="success" onClick={this.listQuery}>
                                List Parents
                            </Button>                    
                        </Col>
                        <Col>
                            <Button variant="warning" onClick={this.addQuery}>
                                Add Parent
                            </Button>                    
                        </Col>                    
                        <Col>
                            <Link to="/" className="btn btn-warning">Back</Link> 
                        </Col>                        
                    </Row>

                </Container>
            </Fragment> 
        )
    }
}
export default ParentList