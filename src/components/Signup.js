import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../actions/users";
import { login } from "../actions/auth";
import "./Signup.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmPassword: "",
      location: "",
      showFirstnameField: true,
      showLastnameField: false,
      showUsernameField: false,
      showPasswordField: false,
      showConfirmField: false,
      showStateSelect: false,
      firstnameError: "",
      lastnameError: "",
      usernameError: "",
      passwordError: "",
      confirmPasswordError: "",
      locationError: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      firstname,
      lastname,
      username,
      password,
      confirmPassword,
      location
    } = this.state;
    const signUpData = { firstname, lastname, username, password, location };
    this.props.dispatch(registerUser(signUpData)).then(() => {
      console.log("User signed up");
      const { username, password } = this.state;
      this.props
        .dispatch(login(username, password))
        .then(() => this.props.history.push("/dashboard"));
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  resetErrors() {
    this.setState({
      firstnameError: "",
      lastnameError: "",
      usernameError: "",
      passwordError: "",
      confirmPasswordError: "",
      locationError: ""
    });
  }

  handleShowField(event) {
    const {
      firstname,
      lastname,
      username,
      password,
      confirmPassword,
      location,
      showLastnameField,
      showUsernameField,
      showPasswordField,
      showConfirmField,
      showStateSelect
    } = this.state;
    let action;
    if (!showLastnameField) {
      this.resetErrors();
      event.preventDefault();
      if (firstname.length === 0) {
        return this.setState({
          firstnameError: "Please enter your first name"
        });
      } else {
        event.preventDefault();
        return this.setState({ showLastnameField: true });
      }
    } else if (!showUsernameField) {
      this.resetErrors();
      event.preventDefault();
      if (lastname.length === 0) {
        this.resetErrors();
        return this.setState({ lastnameError: "Please enter your last name" });
      } else {
        event.preventDefault();
        return this.setState({ showUsernameField: true });
      }
    } else if (!showPasswordField) {
      this.resetErrors();
      event.preventDefault();
      if (username.length === 0) {
        this.resetErrors();
        return this.setState({ usernameError: "Please enter a username" });
      } else {
        event.preventDefault();
        return this.setState({ showPasswordField: true });
      }
    } else if (!showConfirmField) {
      this.resetErrors();
      event.preventDefault();
      if (password.length === 0) {
        this.resetErrors();
        return this.setState({ passwordError: "Password cannot be blank" });
      } else {
        event.preventDefault();
        return this.setState({ showConfirmField: true });
      }
    } else if (!showStateSelect) {
      this.resetErrors();
      event.preventDefault();
      if (password !== confirmPassword) {
        this.resetErrors();
        return this.setState({
          confirmPasswordError: `"Password" and "Confirm password" must match`
        });
      } else {
        event.preventDefault();
        return this.setState({ showStateSelect: true });
      }
    } else {
      this.resetErrors();
      if (location.length === 0) {
        event.preventDefault();
        return this.setState({
          locationError: "Please select your state"
        });
      } else {
        return console.log("Submitting form");
      }
    }
  }

  render() {
    // const arrowImgStyle = {
    //   transform: this.state.showStateSelect ? "rotate(90deg)" : "rotate(0deg)"
    // };
    return (
      <React.Fragment>
        <div className="landing-background">
          <div className="opaque-background">
            <header className="signup-header" role="banner">
              <h1>Sign Up</h1>
              <p className="signup-subhead">
                Already have an account on{" "}
                <Link to="/" className="landing-link">
                  Match-Er
                </Link>
                ? Login in{" "}
                <Link to="/login" className="login-link">
                  here
                </Link>
              </p>
            </header>
            <main role="main">
              <section
                className="signup-section"
                role="region"
                aria-label="Signup section"
              >
                <form onSubmit={e => this.handleSubmit(e)} id="signup-form">
                  <input
                    type="text"
                    id="firstname"
                    placeholder="First Name"
                    className="signup-input"
                    name="firstname"
                    onChange={e => this.handleChange(e)}
                  />
                  <div aria-live="polite" className="errorMsg">
                    {this.state.firstnameError}
                  </div>
                  <br />
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Last Name"
                    className="signup-input"
                    name="lastname"
                    onChange={e => this.handleChange(e)}
                    style={{
                      display: this.state.showLastnameField
                        ? "inline-block"
                        : "none"
                    }}
                  />
                  <div aria-live="polite" className="errorMsg">
                    {this.state.lastnameError}
                  </div>
                  <br />
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    className="signup-input"
                    name="username"
                    onChange={e => this.handleChange(e)}
                    style={{
                      display: this.state.showUsernameField
                        ? "inline-block"
                        : "none"
                    }}
                  />
                  <div aria-live="polite" className="errorMsg">
                    {this.state.usernameError}
                  </div>
                  <br />
                  <input
                    type="text"
                    id="password"
                    placeholder="Password"
                    className="signup-input"
                    name="password"
                    onChange={e => this.handleChange(e)}
                    style={{
                      display: this.state.showPasswordField
                        ? "inline-block"
                        : "none"
                    }}
                  />
                  <div aria-live="polite" className="errorMsg">
                    {this.state.passwordError}
                  </div>
                  <br />
                  <input
                    type="text"
                    id="confirm-password"
                    placeholder="Confirm password"
                    className="signup-input"
                    name="confirmPassword"
                    onChange={e => this.handleChange(e)}
                    style={{
                      display: this.state.showConfirmField
                        ? "inline-block"
                        : "none"
                    }}
                  />
                  <div aria-live="polite" className="errorMsg">
                    {this.state.confirmPasswordError}
                  </div>
                  <br />

                  <select
                    className="state-select"
                    name="location"
                    onChange={e => this.handleChange(e)}
                    style={{
                      display: this.state.showStateSelect
                        ? "inline-block"
                        : "none"
                    }}
                  >
                    <option value="" defaultValue>
                      --Select a state--
                    </option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                  <div aria-live="polite" className="errorMsg">
                    {this.state.locationError}
                  </div>
                  <input
                    type="image"
                    src="https://image.flaticon.com/icons/svg/137/137621.svg"
                    name="submitSignup"
                    className="next-text-fld-btn"
                    onClick={e => this.handleShowField(e)}
                    style={{
                      transform: this.state.showStateSelect
                        ? "rotate(-90deg)"
                        : "rotate(0deg)"
                    }}
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
  register: state.register
});

export default connect(mapStateToProps)(Signup);
