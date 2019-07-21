import React from 'react';

import { Link } from 'react-router-dom';
 
import * as ROUTES  from '../constants/routes';


function Navigation() {
  return (
    <div>
    <ul>
      <li>
        <Link to={ROUTES.LOGIN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    </ul>
  </div>

    
  );
}
// const App = () => (
//   <div>
//     <h1>App Navi Bar

//     </h1>
//   </div>
// );

export default Navigation;