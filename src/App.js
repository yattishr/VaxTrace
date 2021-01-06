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

// import components
import Parent from './components/dashboard/parent/parent';
import Infant from './components/dashboard/infant/infant';
import Vaccine from './components/dashboard/vaccine/vaccine';
import AddParent from './components/dashboard/parent/addParent';
import ListParent from './components/dashboard/parent/listParent';
import menuPage from './pages/menuPage';


Amplify.configure(awsconfig);

function App() {

  return (
    
    <div className="App">
      
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Welcome to VaxTrace!</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
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
          <Route exact path="/vaccine" component={ Vaccine } />
          <Route exact path="/" component={ menuPage } />
        </Router>
      </Container>

    </div>
  );

}

export default withAuthenticator(App);
