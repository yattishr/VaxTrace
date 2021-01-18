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
import {  createVaccine } from '../../../graphql/mutations';

const listVaccinesRecord = `query MyQuery {
    listVaccines {
      items {
        id
        vaccineName
        dateAdministered
        medicalRepName
        vaccineFlag
        vaccineID
        createdAt
        updatedAt

      }
    }
  }`;


export const createVaccineHistory = /* GraphQL */ `
  mutation CreateVaccineHistory(
    $input: CreateVaccineHistoryInput!
    $condition: ModelVaccineHistoryConditionInput
  ) {
    createVaccineHistory(input: $input, condition: $condition) {
      id
      vaccineName
      dateAdministered
      medicalRepName
      vaccineFlag
      vaccineID
      createdAt
      updatedAt
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

export default class addVaccine extends Component {
  state = {
    id : '',
    vaccineName : '',
    vaccineID: '',
    vaccineDosage: '',
    vaccineFrequecy: '',
    infantID: ''
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  createVaccine = async () =>{
    const {id, vaccineName,vaccineDosage, vaccineFrequecy,vaccineID,infantID} = this.state
    if (vaccineName === '' || infantID === '' || vaccineID) return
    try {
        const vaccine = {id, vaccineName,vaccineID, vaccineDosage,vaccineFrequecy,infantID}
        const vaccines = [...this.state.vaccines, vaccine]
        this.setState({ vaccines,
          id : '',
          vaccineName : '',
          vaccineID: '',
          vaccineDosage: '',
          vaccineFrequecy: '',
          infantID: ''

        })
        await API.graphql(graphqlOperation(createVaccine, {input: vaccine} ))
        console.log('parent successfully created!')
    } catch (err) {
      <h1>Ooops....there was an erorr saving the Parent data!</h1>
      console.log('error: ', err)
    }
  }

  ddQuery = async () => {
      const todoDetails = {
        name: 'Party tonight!',
        description: 'Amplify CLI rocks!'
      };
    const newVaccineRecord = await API.graphql(graphqlOperation(addVaccine));
    console.log(JSON.stringify(newVaccineRecord));
    };

  render() {
      return (
          <div>
              <h1 className="my-2"><span className="text-light">Vaccine </span>Dashboard</h1>
              <h4>Add <span className="text-light">Vaccine</span></h4>
              <Container>
                <Form>
                  <Form.Row>
                  <Col>
                    <Form.Group controlId="formBasicLasttname">
                    <Form.Label>vaccineID</Form.Label>
                    <Form.Control type="String" placeholder="vaccine-ID" />
                    </Form.Group>
                  </Col>
                    <Col>
                      <Form.Group controlId="formBasicFirstname">
                      <Form.Label>vaccineName</Form.Label>
                      <Form.Control type="text" placeholder="Vaccine Name " />
                      </Form.Group>
                    </Col>
                  </Form.Row>

                  <Form.Row>
                  <Col>
                    <Form.Group controlId="formBasicFirstname">
                    <Form.Label>medicalrepID</Form.Label>
                    <Form.Control type="String" placeholder="medicalrepID" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formBasicFirstname">
                    <Form.Label>medicalRepName</Form.Label>
                    <Form.Control type="text" placeholder="medicalRepName" />
                    </Form.Group>
                  </Col>

                    <Col>
                      <Form.Group controlId="formBasicContactnumber">
                        <Form.Label>Contact number</Form.Label>
                        <Form.Control type="text" placeholder="+99 123 456 7890" />
                      </Form.Group>
                    </Col>
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
