import React from "react";
import "./Login.css";

export default class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="login-header">
          <h1>Login</h1>
          <hr />
        </header>
        <main>
          <section>
            <form action="">
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="login-input"
              />
              <br />
              <input
                type="text"
                id="password"
                placeholder="Password"
                className="login-input"
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
