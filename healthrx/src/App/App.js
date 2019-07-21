import React from 'react';
import './App.css';
import {  BrowserRouter as Router, Route,} from 'react-router-dom';



import Navigation from '../Navigation/NavBar';
import LoginPatient from '../Login/PatientLogin';
import LoginDoctor from '../Login/DoctorLogin';
import PasswordForgetPage from '../PasswordForget/PasswordForget';
import HomePage from '../Home/Home';
import AccountPage from '../Account/CreateAccount';
import AdminPage from '../Admin/Admin';
<<<<<<< HEAD

import prevlog from '../Patient/PrevLog.js';
import logbook from '../Patient/LogBook.js';


=======
>>>>>>> parent of dd385d08... Merge branch 'master' of https://github.com/itavares/WICKPYZ-Hackathon
import PatientHomepage from '../Patient/Patient';

// Import routes
import * as ROUTES from '../constants/routes';
// import { withFirebase } from '../Firebase/index';
// import { AuthUserContext } from '../Session/Session';
import { withAuthentication } from '../Session/Session';


const App = () => (
  <Router>
  <div>
    <Navigation />

    <hr />

    <Route exact path={ROUTES.LANDING} component={HomePage} />
    <Route path={ROUTES.LOGIN_DOCTOR} component={LoginDoctor} />
    <Route path={ROUTES.LOGIN_PATIENT} component={LoginPatient} />
    <Route
      path={ROUTES.PASSWORD_FORGET}
      component={PasswordForgetPage}
    />

    <Route path={ROUTES.LOGBOOK} component={logbook}/>
    <Route path={ROUTES.PREVLOG} component={prevlog}/>
    <Route path={ROUTES.HOME} component={HomePage} />
    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
    <Route path={ROUTES.ADMIN} component={AdminPage} />
    <Route path={ROUTES.PATIENT_HOME} component={PatientHomepage}/>
  </div>
</Router>
//   <Route>
//   <div >
//         <Navigation />
     
       
//         <hr/>

//         <Route exact path={ROUTES.LANDING} component={HomePage} />
//         <Route path={ROUTES.LOGIN_PATIENT} component={LoginPatient} />
//         <Route path={ROUTES.LOGIN_DOCTOR} component={LoginDoctor}/>
//         <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
//         <Route path={ROUTES.HOME} component={HomePage} />
//         <Route path={ROUTES.ACCOUNT} component={AccountPage} />
//         <Route path={ROUTES.ADMIN} component={AdminPage} />
     
//       </div>
// </Route>
  );

  export default withAuthentication(App);
