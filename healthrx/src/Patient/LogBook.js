import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import Log from './Log'

import * as ROUTES from '../constants/routes';


class LogBook extends Component {

    constructor(props) {
        super(props);
    }

    redirectToPrevLogs = () => {
        this.props.history.push(ROUTES.PREVLOG);
    }


    render() {
        return(
            <div id="logbook">
                <h2> Log Book </h2>
                <Container>
                    <Row>
                        <Col>
                            <Card bg="light" style={{ width: '25rem' }}>
                                <Card.Header>Previous Logs</Card.Header>
                                <Card.Body>

                                    < Log timestamp="Fri Jun 24 2019" small_calendar="Jun 24" score="10"  />

                                    < Log timestamp="Sun Jul 21 2019" small_calendar="Jul 21" score="6"  />

                                    <Button className="mt-2" variant="secondary" size="sm" onClick={this.redirectToPrevLogs}> View More >> </Button>

                                </Card.Body>
                                
                            </Card>


                        </Col>

                        <Col>
                            Put a new circle button for quiz here.

                            Put a button here.
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default LogBook;