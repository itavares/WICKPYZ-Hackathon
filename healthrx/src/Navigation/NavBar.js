import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES  from '../constants/routes';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'


import './NavBar.css'
import { AuthUserContext } from '../Session/Session';
import SignOutButton from '../SingOut/Signout'


//Checks what type of user is logged in ( User or Doctor)
const Navigation = () => (
    <div>
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? <PatientNavBarAuth /> : <PatientNavBarNoAuth />
        }
      </AuthUserContext.Consumer>
    </div>
  );



class PatientNavBarAuth extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         type: "",
    //         navMsg: ""
    //     }
    // }

    render() {

        // if(this.props.type == "doctor") {
        //     this.state.navMsg = "Patient Info"
        // }

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">

                <Container>
                    <Navbar.Brand href="#home"> <img id="logoImage" src={ require('./logo2.png') } /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="mr-auto">
<<<<<<< HEAD
                            <Link to={ROUTES.DOCTOR_HOME}> <i class="fa fa-home" aria-hidden="true"></i></Link>                     
=======
<<<<<<< HEAD
                            <Link to={ROUTES.DOCTOR_HOME}> Home</Link>
=======
                            <Link to={ROUTES.HOME}> Home</Link>
>>>>>>> parent of dd385d08... Merge branch 'master' of https://github.com/itavares/WICKPYZ-Hackathon
                            
>>>>>>> ec7b2a353aa773100c6afa332e96fd7042d74707
                        </Nav>

                        <Nav>
                            <NavDropdown title="DR" id="collasible-nav-dropdown" className="patient-name mr-4">
                                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">My Provider</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <SignOutButton/>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        );
    }
} 
    

const PatientNavBarNoAuth = () => (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">

                <Container>

                    <Navbar.Brand href="#home">HealthtRx</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Link to={ROUTES.HOME}> Home</Link>



                    </Navbar.Collapse>
                </Container>

            </Navbar>

  );

export default Navigation;


