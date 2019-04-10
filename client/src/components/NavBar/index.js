import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";

import "./NavBar.css";

function NavBar(props) {
  function logoutCheck() {
    if (window.confirm("Logout of this account?")) {
      props.loginController.logout(() => {
        props.history.push("/");
      })
    }
  }
  const user = props.loginController.user;

  return (
    <div>
      {!user && <NavLink to="/RegistrationPage" className="navlink" activeClassName="selected">Registration Page</NavLink>}
      {!user && <NavLink to="/LoginPage" className="navlink" activeClassName="selected">Login Page</NavLink>}

      {user && <NavLink to="/UserHomePage" className="navlink" activeClassName="selected">User Home Page</NavLink>}
      {user && <a href="#" className="navlink" onClick={logoutCheck}>Logout</a>}
    </div>
  )
}

// By wrapping this component in `withRouter`, we get access to props.history
//  https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md
export default withRouter(NavBar);