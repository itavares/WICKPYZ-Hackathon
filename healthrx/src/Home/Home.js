import React, { Component } from 'react'
import './Home.css'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
 
import * as ROUTES  from '../constants/routes';

class Home extends Component {
    render() {
        return (
            <Container>
                <Row className="h-100">
                    <Col id="intro" className="my-auto">
                        <span className="align-middle text-center">Welcome To Health Rx.</span>
                    </Col> 
                    <Col>
                        <div id="options" className="align-middle text-center">
                            <h1>Are you a: </h1>

                            <button type="button" onclick="window.location.href='doctor.html'" class="btn btn-info home-page-btn"> <Link to={ROUTES.LOGIN_DOCTOR}> Doctor</Link></button> 
                            <h3> or </h3>
                            <button type="button" onclick="window.location.href='patient.html'" class="btn btn-info home-page-btn"><Link to={ROUTES.LOGIN_DOCTOR}> Patient</Link></button>



                            <p>New?<Link to={ROUTES.ACCOUNT}> Create a account </Link> </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;