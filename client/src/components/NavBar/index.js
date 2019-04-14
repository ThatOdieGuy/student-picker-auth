import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";
import loginController from "../../controllers/LoginController";
import withUserAuth from "../UserAuthWrapper";

import "./NavBar.css";

function NavBar(props) {
  function logoutCheck() {
    if (window.confirm("Logout of this account?")) {
      loginController.logout(() => {
        // props.history exists because of the withRouter wrapper at the bottom of this file
        props.history.push("/");
      })
    }
  }

  // This comes in from the withUserAuth wrapper
  const user = props.user;

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
const NavBarWithRouter = withRouter(NavBar);
const NavBarWithRouterAndAuth = withUserAuth(NavBarWithRouter);

export default NavBarWithRouterAndAuth;