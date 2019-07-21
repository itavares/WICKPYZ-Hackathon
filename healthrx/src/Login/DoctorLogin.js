import React, { Component } from 'react'
import './Login.css'
import {Form} from 'react-bootstrap'

import {  withFirebase } from '../Firebase';
import * as ROUTES from '../constants/routes'
import { withRouter } from 'react-router-dom';
import {compose} from 'recompose';




const DoctorLoginPage = () =>(
    <div>
        <h2> Patient Login </h2>
        <DoctorLoginForm/>
     
    </div>


)


const INITIAL_STATE ={
    email: '',
    password: '',
    error: null,
};



class DoctorLogin extends Component {
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
            this.props.history.push(ROUTES.DOCTOR_HOME); // REDIRECTS TO USERS HOME 
          })
          .catch(error => {
            this.setState({ error: error });
          });
    
        event.preventDefault();

    };

    render() {
        const { email, password, error } = this.state;


        return (
            <div id="login"> 

                <h2>Doctor Login</h2> 
                <div id="facelogo"> 
                    <i class="fas fa-user-md"></i>
                </div>
                <h1>Sign in</h1> 
                <form method="POST" onSubmit={this.onSubmit}>
                    <div class="form-group" id="input">
                        <i class="far fa-user"></i>
                        <Form.Control type="text" name="email" placeholder="Enter username" onChange={this.onChange}  value={email} />
                   

                    </div>
                    <div class="form-group" id="input">
                        <i class="fas fa-key"></i>
                       

                        <Form.Control type="password" name="password" placeholder="Enter password" onChange={this.onChange} value={password} />
                        

                    </div>
                    <button type="submit" class="btn btn" id="loginb">Login
                    </button>

                    {error && <p>{error.message}</p>}

                </form>
            </div>
        );
    }
}

const DoctorLoginForm = compose(
    withRouter,
    withFirebase,
)(DoctorLogin);


export default DoctorLoginPage;

export {DoctorLoginForm};