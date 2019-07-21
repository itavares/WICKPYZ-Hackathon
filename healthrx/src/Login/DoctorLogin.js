import React, { Component } from 'react'
import './Login.css'
import {Form} from 'react-bootstrap'

<<<<<<< HEAD
import {  withFirebase } from '../Firebase';
import * as ROUTES from '../constants/routes'
import { withRouter } from 'react-router-dom';
import {compose} from 'recompose';




const DoctorLoginPage = () =>(
    <div>
        <h2> Doctor Login </h2>
        <DoctorLoginForm/>
     
    </div>


)


const INITIAL_STATE ={
    email: '',
    password: '',
    dataset: [],
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


    // componentDidMount() {
    //     // this.setState(a{ loading: true });
    //     this.unsubscribe = this.props.firebase
    //       .patients()
    //       .onSnapshot(snapshot => {
    //         let dataset = [];
    //         snapshot.forEach(doc =>
    //           dataset.push({ ...doc.data(), uid: doc.id }),
    //         );
    //         console.log(dataset[0].period1Score[1]);
    
    //         this.setState({
    //             dataset,
    //           loading: false,
    //         });
    //       });
    //   }
    
    //   componentWillUnmount() {
    //     this.unsubscribe();
    //   }


=======
class DoctorLogin extends Component {
>>>>>>> parent of dd385d08... Merge branch 'master' of https://github.com/itavares/WICKPYZ-Hackathon
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