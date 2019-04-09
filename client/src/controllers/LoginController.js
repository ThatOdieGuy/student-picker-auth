import axios from "axios";

class LoginController {
  // Not used right now.
  // recheckLogin(loginCallback) {
  //   axios.get("/api/login/getUser").then(response => {
  //     let user = response.data.user;
  //     if (user) {
  //       loginCallback(user);
  //     } else {
  //       loginCallback(null);
  //     }
  //   })
  // }
}

export default new LoginController();