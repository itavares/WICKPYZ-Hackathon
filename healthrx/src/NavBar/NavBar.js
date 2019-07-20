import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap'
import React, { Component } from 'react'

import './NavBar.css'

class PatientNavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            type: "",
            navMsg: ""
        }
    }


    render() {

        if(this.props.type == "doctor") {
            this.state.navMsg = "Patient Info"
        }

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">

                <Container>

                    <Navbar.Brand href="#home">HealthtRx</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="mr-auto">
                            {/* <Nav.Link href="#features">Patient</Nav.Link> */}
                            <Nav.Link href="#pricing">
                                {this.state.navMsg}
                            </Nav.Link>
                            
                        </Nav>

                        <Nav>
                            <NavDropdown title="PT" id="collasible-nav-dropdown" className="patient-name mr-4">
                                <NavDropdown.Item href="#action/3.1">Dank Memes</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">My Provider</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        );
    }
} 
    
export default PatientNavBar;


