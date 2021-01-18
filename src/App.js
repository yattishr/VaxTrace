import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, NavbarBrand } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// import AWS Amplify
import Amplify, { API, graphqlOperation, Auth, Hub } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';


// import image assets
import logo from './undraw_doctor.png';
import va  from './VaxTrace_1.png';


// import components
import Parent from './components/dashboard/parent/parent';
import Infant from './components/dashboard/infant/infant';
import ListInfant from './components/dashboard/infant/listInfant';
import AddInfant from './components/dashboard/infant/addInfant';
import Vaccine from './components/dashboard/vaccine/vaccine';
import AddVaccine from './components/dashboard/vaccine/addVaccine';
import ListVaccine from './components/dashboard/vaccine/listVaccine';
import AddParent from './components/dashboard/parent/addParent';
import ListParent from './components/dashboard/parent/listParent';
import menuPage from './pages/menuPage';


Amplify.configure(awsconfig);

function App() {

  return (

    <div className="App">

      <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">
     <img
       alt=""
       src={va}
       width="180"
       height="100"
       className="d-inline-block align-top"
     />
   </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <NavDropdown title="Parents" id="basic-nav-dropdown">
      <NavDropdown.Item href="/parent/addparent">Add Parent</NavDropdown.Item>
      <NavDropdown.Item href="/parent/listParent">List Parent</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Setting</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Infants" id="basic-nav-dropdown">
      <NavDropdown.Item href="/infant/addInfant">Add Infant</NavDropdown.Item>
      <NavDropdown.Item href="/infant/listInfant">List Infant</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Setting</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Vaccines" id="basic-nav-dropdown">
      <NavDropdown.Item href="/vaccine/addVaccine">Add Vaccine</NavDropdown.Item>
      <NavDropdown.Item href="">Vaccine History</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Setting</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#home">Blog</Nav.Link>
      <Nav.Link href="#home">News</Nav.Link>
    </Nav>
            <Navbar.Text>
              {/* Signed in as: <a href="#login">Mark Otto</a> */}
              <AmplifySignOut />
            </Navbar.Text>
          </Navbar.Collapse>
      </Navbar>

      <Container>
        <menuPage />
        <Router>
          <Route exact path="/parent" component={ Parent } />
          <Route exact path="/parent/addparent" component={ AddParent } />
          <Route exact path="/parent/listparent" component={ ListParent } />
          <Route exact path="/infant" component={ Infant } />
          <Route exact path="/infant/addInfant" component={AddInfant} />
          <Route exact path="/infant/listInfant" component={ListInfant} />
          <Route exact path="/vaccine" component={ Vaccine } />
          <Route exact path="/vaccine/addVaccine" component={AddVaccine}/>
          <Route exact path="/" component={ menuPage } />
        </Router>
      </Container>

    </div>
  );

}

export default withAuthenticator(App);
