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
import { listInfants } from '../../../graphql/queries';

export default class listInfants extends Component {

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

    // list our current infants when the componentloads
    async componentDidMount()  {
      this.listQuery();
    }    

    render() {
        return (
            <Fragment>
                <Container>
                    {
                        this.state.infants.map((infant, i) => {                            
                            return(
                                <Container>
                                    <div>
                                        <h3 className="my-3">ID Number: </h3>
                                        <ul className="list-group">
                                            <li className="list-group-item">First Name: {infant.firstName} </li>
                                            <li className="list-group-item">Last Name: {infant.lastName}</li>
                                            <li className="list-group-item">Title: {infant.dateOfBirtth}</li>
                                            <li className="list-group-item">Date of Birth: {infant.dateOfBirtth}</li>
                                            <li className="list-group-item">Contact Number: </li>
                                            <li className="list-group-item">Email Address: </li>
                                            <li className="list-group-item">Number of Infants: </li>
                                        </ul>
                                        <hr />
                                        
                                        <Row>
                                          <Col>
                                            <Link to="/infant/addinfant" className="btn btn-warning">Add Infant</Link>
                                          </Col>
                                          <Col>
                                            <Link to="/doctor" className="btn btn-warning">Back</Link>
                                          </Col>                                          
                                        </Row>
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