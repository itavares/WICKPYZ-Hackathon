import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import Graph from './Graph'
import * as ROUTES from '../constants/routes';

import './Patient.css'


class Patient extends Component {

    redirectToLogBook = () => {
        this.props.history.push(ROUTES.LOGBOOK);
    }

    render() {
        return(
            <div>
                {/* <h1> Patient Page </h1> */}
                <Container>
                    <Row className="my-3 py-3">
                        <Col md="auto">
                            <Button onClick={this.redirectToLogBook} id="log" className="" size="sm" variant="primary" block><i class="far fa-clipboard"></i><br></br>Log</Button>
                        </Col>
                        <Col md="auto">
                            <Button className="py-3" id="test" size="lg" variant="secondary" block>Diagnosis</Button>
                        </Col>
                        <Col md="auto">
                            <Button className="py-3" size="lg" variant="success" block>Resource</Button>
                        </Col>
                        <Col md="auto">
                            <Button className="py-3" size="lg" variant="warning" block>Appointment</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h1> Graph goes here </h1>
                        </Col>
                        <Col>
                            <p id="score"> Score </p>
                            <p id="crisis-line"> Crisis Line </p>
                        </Col>
                    </Row>

                </Container>

                <Graph/>
            </div>
        );
    }


}

export default Patient;