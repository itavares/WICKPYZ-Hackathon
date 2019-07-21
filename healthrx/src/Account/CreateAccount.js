import React, { Component } from 'react'
import './CreateAccount.css'
import { Form } from 'react-bootstrap'

import {  withFirebase } from '../Firebase';
import * as ROUTES from '../constants/routes'
import { withRouter } from 'react-router-dom';

import {compose} from 'recompose';


const CreatAccountPage = () =>(
    <div>
        {/* Header Goes Here */}
        <h2> Register </h2>
        <CreatAccountForm/>
  </div>

);


  const INITIAL_STATE = {
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
      }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

    onSubmit = event => {
        const { email, passwordOne } = this.state;

        this.props.firebase
          .doCreateUserWithEmailAndPassword(email, passwordOne)
          .then(authUser => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME); // REDIRECTS TO USERS HOME 
          })
          .catch(error => {
            this.setState({ error });
          });
    
        event.preventDefault();

    };

    render() {

        const{
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === ''
        ;

        return (   
                <div id="wrap">
                <form id="form" onSubmit={this.onSubmit} >
                    
                    <hr/>
                    <Form.Group>
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-4">
                            {/* <input type="email" class="form-control" id="inputEmail3" placeholder="Email"> */}
                            <Form.Control value={email} name="email" onChange={this.onChange} type="email" placeholder="Enter email" />
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Password </label>
                        <div class="col-sm-4">
                            {/* <input type="password" class="form-control" id="pass1" placeholder="Password"> */}
                            <Form.Control value={passwordOne} name="passwordOne" onChange={this.onChange} type="password" placeholder="Enter password" />
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Retype-Password</label>
                        <div class="col-sm-4">
                            {/* <input type="password" onchange="checkpass()" class="form-control" id="pass2" placeholder="Retype-Password"> */}
                            <Form.Control value={passwordTwo} name="passwordTwo"  onChange={this.onChange} type="password" placeholder="Retype-password" />

                            <small id="passwordHelp" class="text-danger">
                                Passwords are not the same
                            </small>  
                        </div>
                    </Form.Group>
                    <Form.Group class="form-group">
                        <label for="exampleFormControlSelect2">Account type</label>
                        <select class="form-control col-sm-3" id="accounttype" onchange="enablenum()">
                            <option value="patient" selected>Patient</option>
                            <option value="doctor">Doctor</option>
                        </select>
                    </Form.Group>
                    <Form.Group className="row disabled mt-2">
                        <label for="inputnum" class="col-sm-2 col-form-label">NPI number</label>
                        <div className="col-sm-4">
                            {/* <input type="number"  class="form-control" id="inputnum" placeholder="1234567890" disabled> */}
                            <Form.Control type="number" placeholder="1234567890" disabled/>
                        </div>
                    </Form.Group>
                    {/* <SignUpLink/> */}
                    <Form.Group>
                        <div class="col-sm-4" >
                            <button disabled={isInvalid}  type="submit" class="btn btn-primary">Create Account</button>
                        </div>
                    </Form.Group> 
                    {error && <p>{error.message}</p>}
                </form>
            </div>
        );
    }
}

// const CreatAccountForm = withRouter(withFirebase(CreateAccount));
const CreatAccountForm = compose(
    withRouter,
    withFirebase,
  )(CreateAccount);

export default CreatAccountPage;

export {CreatAccountForm }