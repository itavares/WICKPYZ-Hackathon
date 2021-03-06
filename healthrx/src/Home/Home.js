import React, { Component } from 'react'
import './Home.css'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import { withAuthorization } from '../Session/Session';
 
import * as ROUTES  from '../constants/routes';

import logo from '../Navigation/logo2.png';


const displayLogo = () => (
    <img src={logo} alt="logoimage"> </img>
)

class Home extends Component {
    render() {
        return (
            <Container> 
                <Row className="h-100">
                    <Col id="intro" className="my-auto">
                        <span className="align-middle text-center"> <img src={ require('../Navigation/logo2.png') } />
</span>
                    </Col> 
                    <Col>
                        <div id="options" className="align-middle text-center">
                            <h1>Are you a: </h1>

                            <button type="button" onclick="window.location.href='doctor.html'" class="btn btn-info home-page-btn"> <Link to={ROUTES.LOGIN_DOCTOR}> Doctor</Link></button> 
                            <h3> or </h3>
                            <button type="button" onclick="window.location.href='patient.html'" class="btn btn-info home-page-btn"><Link to={ROUTES.LOGIN_PATIENT}> Patient</Link></button>



                            <p>New?<Link to={ROUTES.ACCOUNT}> Create a account </Link> </p>
                        </div>

                    </Col>
                </Row>
            </Container>
        );
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
// export default Home;