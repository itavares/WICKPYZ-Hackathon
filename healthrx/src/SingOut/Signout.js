import React from 'react';

import {withFirebase } from '../Firebase';
import "./Signout.css";

const LogOutButton =({firebase }) => (

 
    <a class="dropdown-item" href="" onClick={firebase.doSignOut} > Log Out</a>
);


export default withFirebase(LogOutButton);