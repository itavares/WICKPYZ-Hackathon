import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import './Patient.css'

class Patient extends Component {
    render() {
        return(
            <div>
                <h1> Patient Page </h1>
                <Container>
                    <Row className="my-3 py-3">
                        <Col>
                            <Button className="py-3" size="lg" variant="primary" block>Logbook</Button>
                        </Col>
                        <Col>
                            <Button className="py-3" size="lg" variant="secondary" block>Diagnosis</Button>
                        </Col>
                        <Col>
                            <Button className="py-3" size="lg" variant="success" block>Resource</Button>
                        </Col>
                        <Col>
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
            </div>
        );
    }


}

export default Patient;