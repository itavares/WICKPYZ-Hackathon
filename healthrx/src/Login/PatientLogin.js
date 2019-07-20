import React, { Component } from 'react'
import './Login.css'
import { Form } from 'react-bootstrap';

class PatientLogin extends Component {
    render() {
        return (
            <div id="login">
                <h2> Patient Login </h2>
                <div id="facelogo"> 
                    <i class="far fa-user"></i>
                </div>
                <h1>Sign in</h1> 
                <form>
                    <Form.Group controlId="formBasicEmail" id="input">
                        <i class="far fa-user"></i>
                        {/* <input type="text" class="form-control" id="user" name="user" placeholder="Enter username"> </input> */}
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>
                    <div class="form-group" id="input">
                        <i class="fas fa-key"></i>
                        {/* <input type="password" class="form-control" id="password" name="password" placeholder="Enter password"> </input> */}
                        <Form.Control type="password" name="password" placeholder="Enter password" />
                        {/* <i id="showpass" class="far fa-eye"></i>   */}
                    </div>
                    <button type="submit" class="btn btn" id="loginb">Login</button>
                </form>
            </div>
        );
    }
}

export default PatientLogin;