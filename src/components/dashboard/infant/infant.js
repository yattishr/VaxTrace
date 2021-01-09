import React, { Component, useEffect, useState } from 'react'

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, NavbarBrand } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import AWS components
import { API, graphqlOperation } from 'aws-amplify';

export default class infant extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4 my-3">Infant Dashboard</h1>
            </div>
        )
    }
}
