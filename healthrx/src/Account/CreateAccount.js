import React, { Component } from 'react'
import './CreateAccount.css'
import { Form } from 'react-bootstrap'

class CreateAccount extends Component {
    render() {
        return (
            <div id="wrap">
                <form id="form">
                    <h2> Register </h2>
                    <hr/>
                    <Form.Group>
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-4">
                            {/* <input type="email" class="form-control" id="inputEmail3" placeholder="Email"> */}
                            <Form.Control type="email" placeholder="Enter email" />
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Password </label>
                        <div class="col-sm-4">
                            {/* <input type="password" class="form-control" id="pass1" placeholder="Password"> */}
                            <Form.Control type="password" placeholder="Enter password" />
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Retype-Password</label>
                        <div class="col-sm-4">
                            {/* <input type="password" onchange="checkpass()" class="form-control" id="pass2" placeholder="Retype-Password"> */}
                            <Form.Control type="password" placeholder="Retype-password" />

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
                    <Form.Group>
                        <div class="col-sm-4" >
                            <button type="submit" class="btn btn-primary">Create Account</button>
                        </div>
                    </Form.Group>
                </form>
            </div>
        );
    }
}

export default CreateAccount;