import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, NavbarBrand } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { API, graphqlOperation } from 'aws-amplify';

import queries from '../../../graphql/mutations';
import { createInfant } from '../../../graphql/mutations';

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

const addInfantData = `mutation addNewInfant {
    createInfant(input:
      {
        id : "8007155160080"
        firstName :"abc",
        lastName : "xyz",
        dateOfBirth : "18-Aug-1982",
        gender : "male",
        parentID : "8007155160080"
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

export default class addInfant extends Component {

    state = {

        formId : '',
        formFirstName: '',
        formLastName: '',
        formDateBirth: '',
        formGender: '',
        formContactNumber: '',
        parents: []


    }

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
      console.log("First name: " + this.state.formFirstName + " Last name: " + this.state.formLastName)
    };

    handleSubmit = (e) => {
      var infantDetails = {
        id : this.state.formId,
        firstname: this.state.formFirstName,
        lastname: this.state.formLastName,
        gender: this.state.formGender,
        email: this.state.formEmail,
        contact: this.state.formContactNumber,
        dateofbirth: this.state.formDateBirth
      }
      console.log("infant Details: " + JSON.stringify(infantDetails))
      API.graphql(graphqlOperation(createInfant, {input: infantDetails} ));
      console.log('Infant details added successfully!')
    }


    //onChange = e => {
      //  this.setState({ [e.target.name]: e.target.value })
    // }

    createInfant = async () => {
        const { firstName, lastName, dateOfBirth, gender, parent , contactNumber
        } = this.state
        if (firstName === '' || lastName === '') return
        try  {
            const infant = { firstName, lastName, dateOfBirth, gender, parent , contactNumber }
            const infants = [...this.state.infants,infant]
            this.setState({ infants,
            formFirstName: '',
            formLastName: '',
            formDateBirth : '',
            formGender: '',
            parent: '',
            formContactNumber: ''
        })
        await API.graphql(graphqlOperation(createInfant, { input: infant }))
        console.log('Infant successfully created!')
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
        const newInfantRecord = await API.graphql(graphqlOperation(addInfantData));
        console.log(JSON.stringify(newInfantRecord));
    };

    render() {
        return (
            <div>
                <h1 className="my-2"><span className="text-light"> Infant </span>Dashboard</h1>
                <h4>Add <span className="text-light">Infant</span></h4>
                <Container>
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Group controlId="formBasicFirstname">
                                    <Form.Label> First name</Form.Label>
                                    <Form.Control type="text" placeholder=" Infant First name" onChange={this.handleChange('formFirstName')} name="formFirstName" />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="formBasicLasttname">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control type="text" placeholder=" Infant Last name" onChange={this.handleChange('formLastName')} name="formLastName" />
                                </Form.Group>
                            </Col>
                        </Form.Row>

                        <Form.Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange('formEmail')} name="formEmail" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                          </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="exampleForm.SelectCustom">
                                    <Form.Label>gender</Form.Label>
                                    <Form.Control as="select" onChange={this.handleChange('formGender')} name="formGender" custom>
                                        <option>Male</option>
                                        <option>Female</option>

                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Form.Row>

                        <Form.Row>
                          <Col>
                            <Form.Group controlId="formBasicDate">
                                <Form.Label> Parent ID </Form.Label>
                                <Form.Control type="text" placeholder="8007155160080"/>
                            </Form.Group>
                          </Col>
                            <Col>
                                <Form.Group controlId="formBasicContactnumber">
                                    <Form.Label>Contact number</Form.Label>
                                    <Form.Control type="text" placeholder="+99 123 456 7890" onChange={this.handleChange('formContactNumber')} name="formContactNumber"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicDate">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control type="text" placeholder="18-Aug-1982" onChange={this.handleChange('formDateBirth')} name="formDateBirth" />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control placeholder="New York City" onChange={this.handleChange('formGridCity')} name="formGridCity"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select"  onChange={this.handleChange('formGridState')} name="formGridState" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>CA</option>
                                    <option>ZA</option>
                                    <option>FA</option>
                                    <option>DA</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col}  controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control onChange={this.handleChange('formGridZip')} name="formGridZip" />
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
                                <Button onClick={this.handleChange} variant="primary" type="submit">
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
