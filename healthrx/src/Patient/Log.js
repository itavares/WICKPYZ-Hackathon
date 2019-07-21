
import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'


class Log extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timestamp:"",
            small_calendar:"",
            score: 0,
        }
    }

    render() {

        return (
            <Card className="ml-3 mt-3" border="primary" bg="light" style={{ width: '20rem' }}>
                <Card.Header>
                    <Row>
                        <Col xs={8}>
                            {this.props.timestamp}
                        </Col>
                        <Col>
                            <p className="small-calendar border border-primary p-1">{this.props.small_calendar}</p>
                        </Col>
                    </Row>

                </Card.Header>

                <Card.Body>
                    <Card.Text>
                        Score: {this.props.score}
                        Put three other circles
                    </Card.Text>
                </Card.Body>

                <Card.Footer className="py-0">
                    <small> <a href="#"> View >> </a>  </small>
                </Card.Footer>
            </Card>
        );
    }
}

export default Log;