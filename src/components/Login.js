import React from "react";
import { login } from "../actions/auth";
import { connect } from "react-redux";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    //debugger;
    this.props.dispatch(login(username, password)).then(() => {
      this.props.history.push("/dashboard");
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <header className="login-header" role="header">
          <h1>Login</h1>
          <hr />
        </header>
        <main role="main">
          <section role="region">
            <form action="" onSubmit={e => this.handleSubmit(e)}>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="login-input"
                name="username"
                onChange={e => {
                  this.handleChange(e);
                }}
              />
              <br />
              <input
                type="text"
                id="password"
                placeholder="Password"
                className="login-input"
                name="password"
                onChange={e => {
                  this.handleChange(e);
                }}
              />
              <br />
              <button type="submit" className="submit-login">
                Log in
              </button>
            </form>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  register: state.register,
  auth: state.auth
});

export default connect(mapStateToProps)(Login);
