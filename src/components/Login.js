import React from "react";
import "./Login.css";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onSubmit(event) {
    event.preventDefault();
  }

  onChange(event) {
    console.log(event.target.value, event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <header className="login-header">
          <h1>Login</h1>
          <hr />
        </header>
        <main>
          <section>
            <form action="" onSubmit={this.onSubmit}>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="login-input"
                name="username"
                onChange={e => {
                  this.onChange(e);
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
                  this.onChange(e);
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
