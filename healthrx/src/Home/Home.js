import React, { Component } from 'react'
import './Home.css'
import { Row, Col, Container } from 'react-bootstrap'
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';

 
import * as ROUTES  from '../constants/routes';
>>>>>>> firebase-authentication

class Home extends Component {
    render() {
        return (
<<<<<<< HEAD
            <Container>
=======
            <Container> 
>>>>>>> firebase-authentication
                <Row className="h-100">
                    <Col id="intro" className="my-auto">
                        <span className="align-middle text-center">Welcome To Health Rx.</span>
                    </Col> 
                    <Col>
                        <div id="options" className="align-middle text-center">
                            <h1>Are you a: </h1>
<<<<<<< HEAD
                            <button type="button" onclick="window.location.href='doctor.html'" class="btn btn-info">Doctor</button> 
                            <h3> or </h3>
                            <button type="button" onclick="window.location.href='patient.html'" class="btn btn-info">Patient</button>
                            <p>New? <a href="createaccount.html"> Create a account </a> </p>
                        </div>
=======

                            <button type="button" onclick="window.location.href='doctor.html'" class="btn btn-info home-page-btn"> <Link to={ROUTES.LOGIN_DOCTOR}> Doctor</Link></button> 
                            <h3> or </h3>
                            <button type="button" onclick="window.location.href='patient.html'" class="btn btn-info home-page-btn"><Link to={ROUTES.LOGIN_PATIENT}> Patient</Link></button>



                            <p>New?<Link to={ROUTES.ACCOUNT}> Create a account </Link> </p>
                        </div>

>>>>>>> firebase-authentication
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;