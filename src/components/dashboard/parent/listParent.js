import React, { Component, useEffect, useState } from 'react'

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


    listQuery = async () => {
        console.log('listing parent records');
        const allRecords = await API.graphql(graphqlOperation(listParentRecords));
        console.log(JSON.stringify(allRecords));
      };

    render() {
        
        return (
            <div>
                <h1 className="display-4 my-3"><span className="text-light">Parent Dashboard</span></h1>
                <div>
                    <h4>Parent Listing</h4>
                </div>

                <h1 className="display-4 my-3"><span className="text-light">Mission: </span>{'1'}</h1>
                <h4 className="mb-3">Parent Details</h4>
                <ul className="list-group">
                    <li className="list-group-item">First Name: {'1'}</li>
                    <li className="list-group-item">Last Name: {'1'}</li>
                    <li className="list-group-item">Title: {'1'}</li>
                    <li className="list-group-item">Contact Number: {'1'}</li>
                    <li className="list-group-item">Number of Infants: {'1'}</li>
                </ul>

            </div>
        )
    }
}
