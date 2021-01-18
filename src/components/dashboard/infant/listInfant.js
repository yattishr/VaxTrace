import React, { Component, useEffect, useState, Fragment } from 'react'

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, NavbarBrand } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { API, graphqlOperation } from 'aws-amplify';

const listInfantsRecords = `query MyQuery {
    listInfants {
      items {
        firstName
        lastName
        titleField
        dateOfBirth
        gender
        contactNumber

      }
    }
  }`;

  export const listInfants = /* GraphQL */ `
    query ListInfants(
      $filter: ModelInfantFilterInput
      $limit: Int
      $nextToken: String
    ) {
      listInfants(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
          id
          firstName
          lastName
          dateOfBirth
          gender
          parentID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  `;

  const addInfant = `mutation addNewInfant {
      createInfant(input:
        {
          firstName :"abc",
          lastName : "xyz",
          titleField : "Mr",
          dateOfBirth : "18-Aug-1982",
          gender : "male",
          contactNumber : " 0742532694"
        }
      ) {
        id
      }
    }
    `;
class InfantList extends Component {

  state = { infants: [] }

  listQuery = async() => {
      try {
          const apiData = await API.graphql(graphqlOperation(listInfants));
          const infants = apiData.data.listInfants.items
          this.setState({ infants })
          console.log(infants)
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
    const newInfantRecord = await API.graphql(graphqlOperation(addInfant));
    console.log(JSON.stringify(newInfantRecord));
    };

    // list our current parents when the componentloads
    async componentDidMount()  {
      this.listQuery();
    }

    render() {
        return(
            <Fragment>
                <Container>
                    {
                        this.state.infants.map((infant, i) => {
                            return(
                                <Container>
                                    <div>
                                        <h3 className="my-3">ID Number: {infant.idNumber}</h3>
                                        <ul className="list-group">
                                            <li className="list-group-item">First Name: {infant.firstName} </li>
                                            <li className="list-group-item">Last Name: {infant.lastName}</li>
                                            <li className="list-group-item">Date of Birth: {infant.dateOfBirtth}</li>
                                            <li className="list-group-item">Contact Number: {infant.contactNumber}</li>
                                            <li className="list-group-item">Email Address: {infant.emailAddress}</li>

                                        </ul>
                                        <hr />
                                        <Link to="/" className="btn btn-warning">Add Infant</Link>
                                    </div>
                                </Container>
                            )
                        })
                    }

                </Container>
            </Fragment>
        )
    }
}
export default InfantList
