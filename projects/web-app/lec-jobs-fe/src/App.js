import { Component } from "react";
import "./App.css";
import Index from "./components/Home";
import Login from "./components/Login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userLoggedIn: false,
      user: {},
    };
    this.loginUser = this.loginUser.bind(this);
  }
  loginUser(user) {
    this.setState({ userLoggedIn: true, user: user });
  }

  render() {
    if (this.state.userLoggedIn) {
      return <Index user={this.state.user}></Index>;
    } else {
      return <Login loginUser={this.loginUser}></Login>;
    }
  }
}

export default App;
