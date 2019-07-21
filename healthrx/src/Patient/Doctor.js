import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { withAuthorization } from '../Session/Session';
import * as ROUTES from '../constants/routes';

import Graph from './Graph'

import './Patient.css'


class Patient extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            entries: [],
        })
    }

    redirectToLogBook = () => {
        this.props.history.push(ROUTES.LOGBOOK);
    }

    componentDidMount() {
        // this.setState(a{ loading: true });
        this.unsubscribe = this.props.firebase
          .patients()
          .onSnapshot(snapshot => {
            let dataset = [];
            snapshot.forEach(doc =>
              dataset.push({ ...doc.data(), uid: doc.id }),
            );
            // console.log(dataset[0].period1Score[1]);
            console.log("dataset[0]", dataset[0]);

    
            this.setState({
                // entries: dataset[0].entries,
              loading: false,
            });
          });
      }
    
      componentWillUnmount() {
        this.unsubscribe();
      }


    render() {
        // const { dataset } = this.state.dataset[0].entries.dayscores;
        return(
            <div>
                {/* <h1> Patient Page </h1> */}
                <Container>
                    <Row className="my-3 py-2">
                        <Col >
                            <Button onClick={this.redirectToLogBook} id="log" className="py-3" size="lg" variant="primary" block><i id="icon" class="far fa-clipboard"></i><br></br><br></br>Log</Button>
                        </Col>
                        <Col >
                            <Button className="py-3" id="treat" size="lg" variant="secondary" block><i id="icon" class="fas fa-pills"></i><br></br><br></br>Treatment</Button>
                        </Col>
                        <Col py-3>
                            <Button className="py-3" id="Apptmnt" size="lg" variant="warning" block><i id="icon" class="far fa-calendar-alt"></i><br></br><br></br>Appointment</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <Graph id="graph" entries={this.state.entries} date={this.state.date} />
                        </Col>
                    </Row>

                </Container>    
            </div>
        );
    }


}

// export default Patient;
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Patient);