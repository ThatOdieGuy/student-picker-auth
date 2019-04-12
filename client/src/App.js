import React, { Component } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import UserHomePage from "./pages/UserHomePage";
import FrontPage from "./pages/FrontPage";
import StudentEditPage from "./pages/StudentEditPage";
import loginController from "./controllers/LoginController"

/**
 * The main App component that holds our whole React app
 */
class App extends Component {
  state = { user: null }

  componentDidMount() {
    console.log("componentDidMount");
    loginController.addUserChangedListener(this.setUser);

    loginController.recheckLogin();
  }

  componentWillUnmount() {
    console.log("WillUnmount");
    loginController.removeUserChangedListener(this.setUser);
  }

  setUser = (user) => {
    console.log("setUser", user);
    this.setState({ user: user });
  }

  render() {
    return (
      <Router>
      
        <div className="App">
          <NavBar loginController={loginController}/>
          <br/><br/>
          { this.state.user ? <div>User: {this.state.user.username}</div> : null }
          <Switch>
            {!this.state.user && <Route path="/RegistrationPage" component={RegistrationPage}/>}            
            {!this.state.user && <Route path="/LoginPage/:reason?" component={LoginPage}/>}
            {this.state.user && <Route path="/UserHomePage" component={UserHomePage}/>}
            
            <Route path="/StudentEditPage/:student" component={StudentEditPage}/>

            {!this.state.user && <Route exact path="/" component={FrontPage}/>}
          </Switch>
         
        </div>
      
      </Router>
    );
  }
}

export default App;