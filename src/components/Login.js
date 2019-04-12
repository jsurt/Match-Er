import React from "react";
import { Link } from "react-router-dom";
import { login } from "../actions/auth";
import { connect } from "react-redux";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      blankFieldErr: "",
      loginError: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    if (username.length === 0 || username.length === 0) {
      return this.setState({
        blankFieldErr: "Please enter a username and a password"
      });
    } else {
      this.props.dispatch(login(username, password)).then(() => {
        const loggedIn = this.props.auth.loggedIn;
        if (loggedIn) {
          return this.props.history.push("/dashboard");
        } else {
          return this.setState({
            loginError: "Incorrect username or password"
          });
        }
      });
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="landing-background">
          <div className="opaque-background">
            <header className="login-header" role="header">
              <h1>Login</h1>
              <p className="login-subhead">
                Don't have an account on{" "}
                <Link to="/" className="landing-link">
                  Match-Er
                </Link>
                ? Sign up{" "}
                <Link to="/signup" className="signup-link">
                  here
                </Link>
              </p>
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
                  <div aria-live="polite" className="errorMsg">
                    {this.state.blankFieldErr}
                    {this.state.loginError}
                  </div>
                  <input
                    type="image"
                    src="https://image.flaticon.com/icons/svg/137/137621.svg"
                    name="submitLogin"
                    className="submit-login"
                  />
                </form>
              </section>
            </main>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  register: state.register,
  auth: state.auth
});

export default connect(mapStateToProps)(Login);
