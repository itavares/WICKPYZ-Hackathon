import React, { Component } from 'react'
import './Login.css'
import {Form} from 'react-bootstrap'

class DoctorLogin extends Component {
    render() {
        return (
            <div id="login"> 

                <h2>Doctor Login</h2> 
                <div id="facelogo"> 
                    <i class="fas fa-user-md"></i>
                </div>
                <h1>Sign in</h1> 
                <form method="POST">
                    <div class="form-group" id="input">
                        <i class="far fa-user"></i>
                        <Form.Control type="text" name="user" placeholder="Enter username" />
                        {/* <input type="text" class="form-control" id="user" name="user" placeholder="Enter username"><br>  */}
                    </div>
                    <div class="form-group" id="input">
                        <i class="fas fa-key"></i>
                        {/* <input type="password" class="form-control" id="password" name="password" placeholder="Enter password"> &nbsp; */}
                        <Form.Control type="password" name="password" placeholder="Enter password" />
                        {/* <i onmousedown="showpass()" onmouseup="hidepass()" id="showpass" class="far fa-eye"></i>   */}
                    </div>
                    <button type="submit" class="btn btn" id="loginb">Login</button>
                </form>

            </div>
        );
    }
}

export default DoctorLogin;