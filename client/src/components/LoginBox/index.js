import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class LoginBox extends React.Component {
  state = { username: "", password: "", error: null, loggedIn: false }

  login = (e) => {
    e.preventDefault();

    const postData = { username: this.state.username, password: this.state.password };

    axios.post("/api/user/login", postData)
      .then(response => {
          // Got here, we should have a cookie set and can go forward
          console.log("User logged in");

          this.setState({ loggedIn: true });
        })
      .catch(err => {
        let message = err.response.data.error || "Unable to login";

        this.setState({ error: message });
      })
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