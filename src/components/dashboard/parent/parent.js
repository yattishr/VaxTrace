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

  const addParent = `mutation addNewParent {
    createParent(input: 
      {
        medicalrepID: "4", 
        firstName: "daffy", 
        lastName: "duck", 
        noOfInfants: 1, 
        emailAddress: "daffyduck@gmail.com", 
        contactNumber: "0742532694", 
        titleField: "Mr", 
        dateOfBirtth: "15-Jul-1982", 
        idNumber: "8007155160080", 
        physicalAddress: "14 Valentines Road, Disneyland"
      }
    ) {
      id
    }
  }
  `;

export default class parent extends Component {


    addQuery = async () => {
        const todoDetails = {
          name: 'Party tonight!',
          description: 'Amplify CLI rocks!'
        };
      const newParentRecord = await API.graphql(graphqlOperation(addParent));
      console.log(JSON.stringify(newParentRecord));
      };

    render() {
        
        return (
            <div>
                <h1 className="display-4 my-3"><span className="text-light">Parent Dashboard</span></h1>
                <div>
                    <h4>Parent Listing</h4>
                </div>

                <ParentList />

                <Row className="justify-content-md-center">
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
                </Row>
            </div>
        )
    }
}
