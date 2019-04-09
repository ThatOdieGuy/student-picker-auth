import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from "react-router";

import "./NavBar.css";

// TODO: Highlight these links

function NavBar(props) {
  function logoutCheck() {
    if (window.confirm("Logout of this account?")) {
      axios.post("/api/user/logout").then(response => {
        props.history.push("/");
      })
    }
  }

  return (
    <div>
      <NavLink to="/RegistrationPage" className="navlink" activeClassName="selected">Registration Page</NavLink>
      <NavLink to="/LoginPage" className="navlink" activeClassName="selected">Login Page</NavLink>
      <NavLink to="/UserHomePage" className="navlink" activeClassName="selected">User Home Page</NavLink>
      <a href="#" className="navlink" onClick={logoutCheck}>Logout</a>
    </div>
  )
}

// By wrapping this component in `withRouter`, we get access to props.history
//  https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md
export default withRouter(NavBar);