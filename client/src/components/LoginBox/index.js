import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import loginController from '../../controllers/LoginController';

class LoginBox extends React.Component {
  state = { username: "", password: "", error: null, loggedIn: false }

  login = (e) => {
    e.preventDefault();

    loginController.login(this.state.username, this.state.password, user => {
      this.props.history.push("/UserHomePage");
    });
  }

  inputChanged = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/UserHomePage"/>;
    }

    return (
      <form onSubmit={this.login}>
        Username: <input type="text" name="username" onChange={this.inputChanged}/>
        Password: <input type="password" name="password" onChange={this.inputChanged}/>
        <input type="submit" onClick={this.login} value="Login"/>
        {this.state.error && <div>{this.state.error}</div>}
      </form>
    )
  }
}

export default withRouter(LoginBox);