import React from 'react';
import './App.css';
import {  BrowserRouter as Router,
          Route,
} from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import LandingPage from '../Landing/Landing';
import SignUpPage from '../SignUp/Signup';
import LoginPatient from '../Login/PatientLogin';
import LoginDoctor from '../Login/DoctorLogin';
import PasswordForgetPage from '../PasswordForget/PasswordForget';
import HomePage from '../Home/Home';
import AccountPage from '../Account/CreateAccount';
import AdminPage from '../Admin/Admin';

// Import routes
import * as ROUTES from '../constants/routes';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.LOGIN} component={LoginPatient} />
      <Route path={ROUTES.LOGIN} component={LoginDoctor}/>
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>

      </Router>

      </header>
    </div>
  );
}

export default App;
