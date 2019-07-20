import React, { Component } from 'react'
import './Login.css'
import { Form } from 'react-bootstrap';


import {  withFirebase } from '../Firebase';
import * as ROUTES from '../constants/routes'
import { withRouter } from 'react-router-dom';
import {compose} from 'recompose';



const PatientLoginPage = () =>(
    <div>
        <h2> Patient Login </h2>
        <PatientLoginForm/>
    </div>


)


const INITIAL_STATE ={
    email: '',
    password: '',
    error: null,
};



class PatientLogin extends Component {

    constructor(props) {
        super(props);
    
        this.state = { ...INITIAL_STATE };
      }
      onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
          .doSignInWithEmailAndPassword(email, password)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME); // REDIRECTS TO USERS HOME 
          })
          .catch(error => {
            this.setState({ error });
          });
    
        event.preventDefault();

    };

    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '' ;


        return (
            <div id="login">
                {/* <h2> Patient Login </h2> */}
                <div id="facelogo"> 
                    <i class="far fa-user"></i>
                </div>
                <h1>Sign in</h1> 
                <form onSubmit={this.onSubmit}>
                    <Form.Group  id="input"  name="email">
                        <i class="far fa-user"></i>
                        {/* <input type="text" class="form-control" id="user" name="user" placeholder="Enter username"> </input> */}
                        <Form.Control onChange={this.onChange}  value={email} type="text" placeholder="Enter username"  name="email" />
                    </Form.Group>


                    <div class="form-group" id="input">
                        <i class="fas fa-key"></i>
                        {/* <input type="password" class="form-control" id="password" name="password" placeholder="Enter password"> </input> */}
                        <Form.Control type="password" name="password" onChange={this.onChange} value={password} placeholder="Enter password" />
                        {/* <i id="showpass" class="far fa-eye"></i>   */}
                    </div>
                    <button  type="submit" class="btn btn" id="loginb">Login</button>

                    {error && <p>{error.message}</p>}
                </form>
            </div>
        );
    }
}

const PatientLoginForm = compose(
    withRouter,
    withFirebase,
)(PatientLogin);


export default PatientLoginPage;

export {PatientLoginForm};
