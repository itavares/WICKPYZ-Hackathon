import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home'
import PatientLogin from './Login/PatientLogin'
import DoctorLogin from './Login/DoctorLogin'
import CreateAccount from './Account/CreateAccount'
import Patient from './Patient/Patient'
import Doctor from './Doctor/Doctor'
import NavBar from './NavBar/NavBar'


// import Header from './Header';

function App() {
  return (
    <div className="App">

      <NavBar type="patient" />
      < Patient />

      {/* < Doctor />
      {/* < Home />
      < PatientLogin />
      < DoctorLogin /> */}
      {/* < CreateAccount /> */}
    </div>
  );
}

export default App;
