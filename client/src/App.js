import React, { Component } from "react";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import UserHomePage from "./pages/UserHomePage";
import FrontPage from "./pages/FrontPage";

/**
 * The main App component that holds our whole React app
 */
class App extends Component {
  state = { user: null }

  componentDidMount() {
    // TODO: Put this back
    // LoginController.recheckLogin(user => {
    //   this.setState({ user: user });
    // })
  }

  setUser = (user) => {
    this.setState({ user: user });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <br/><br/>
          { this.state.user ? <div>User: {this.state.user.name}</div> : null }
          <Route path="/RegistrationPage" component={RegistrationPage}/>
          <Route path="/LoginPage/:reason?" component={LoginPage}/>
          <Route path="/UserHomePage" component={UserHomePage}/>
          <Route exact path="/" component={FrontPage}/>
        </div>
      </Router>
    );
  }
}

export default App;