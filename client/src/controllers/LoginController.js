import axios from "axios";

class LoginController {
  // This is a list of callbacks that are remembered for when the user changes. (login/logout)
  userChangedListeners = [];

  user = null;

  login(username, password, afterLoginCallback) {
    const postData = { username: username, password: password };

    axios.post("/api/user/login", postData)
      .then(response => {
          // Got here, we should have a cookie set and can go forward
          console.log("User logged in");
          
          let user = response.data.user;
          this.setUser(user);
          
          afterLoginCallback && afterLoginCallback(null, user);
        })
      .catch(err => {
        console.log("Login error", err);
        // The error might have come from the server, or thrown by the client
        let errorMessage = (err.response && err.response.data.error) || "Unable to login";

        afterLoginCallback(errorMessage, null);
      })
  }

  // Hit our API and validate our authentication information
  recheckLogin(loginCallback) {
    axios.get("/api/user/getUser").then(response => {
      let user = response.data.user || null;

      this.setUser(user);

      loginCallback && loginCallback(user);
    })
  }

  setUser(user) {
    this.user = user;

    // Go through all the listeners and notify them
    this.userChangedListeners.forEach(listener => listener(user));
  }

  logout(afterLogoutCallback) {
    axios.post("/api/user/logout").then(response => {
      this.setUser(null);

      afterLogoutCallback && afterLogoutCallback();
    })
  }

  addUserChangedListener(listenerCallback) {
    this.userChangedListeners.push(listenerCallback);
  }

  removeUserChangedListener(listenerCallback) {
    this.userChangedListeners = 
      this.userChangedListeners.filter(l => l !== listenerCallback);
  }
}

export default new LoginController();