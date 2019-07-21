import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardDeck } from 'react-bootstrap'

import Log from './Log'


class PrevLog extends Component {
    render() {
        return (
            <div id="prev-log">
                <Container>
                        <Card>
                        <Card.Header>Previous Logs</Card.Header>
                        <Card.Body>
                            <CardDeck>

                                <Log timestamp="Fri Jun 24 2019" small_calendar="Jun 24" score="10"/>
                                <Log timestamp="Sun Jul 21 2019" small_calendar="Jul 21" score="6"/>
                                <Log timestamp="Sun Jul 21 2019" small_calendar="Jul 21" score="6"/>

                            </CardDeck>

                            <CardDeck>

                                <Log timestamp="Fri Jun 24 2019" small_calendar="Jun 24" score="10"/>
                                <Log timestamp="Sun Jul 21 2019" small_calendar="Jul 21" score="6"/>
                                <Log timestamp="Sun Jul 21 2019" small_calendar="Jul 21" score="6"/>

                            </CardDeck>

                        </Card.Body>
                        </Card>
                </Container>
            </div>


        );
    }
}

export default PrevLog;