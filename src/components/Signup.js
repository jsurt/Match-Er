import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../actions/register";
import "./Signup.css";

class Signup extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(registerUser());
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <header className="signup-header">
          <h1>Sign Up</h1>
          <p className="signup-subhead">
            Already have an account on Match-Er? Login in{" "}
            <Link to="/login">here</Link>
          </p>
        </header>
        <main>
          <section>
            <form onSubmit={e => this.handleSubmit(e)}>
              <input
                type="text"
                id="firstname"
                placeholder="Firstname"
                className="signup-input"
                name="firstname"
                onChange={e => this.handleChange(e)}
              />
              <br />
              <input
                type="text"
                id="lastname"
                placeholder="Lastname"
                className="signup-input"
                name="lastname"
                onChange={e => this.onChange(e)}
              />
              <br />
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="signup-input"
                name="email"
                onChange={e => this.onChange(e)}
              />
              <br />
              <input
                type="text"
                id="password"
                placeholder="Password"
                className="signup-input"
                name="password"
                onChange={e => this.onChange(e)}
              />
              <br />
              <input
                type="text"
                id="confirm-password"
                placeholder="Confirm password"
                className="signup-input"
                name="confirmPassword"
                onChange={e => this.onChange(e)}
              />
              <br />
              <label htmlFor="state">What state do you live in?</label>
              <select
                className="state"
                name="state"
                onChange={e => this.onChange(e)}
              >
                <option value="" defaultValue disabled>
                  Select a state
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
              <button className="submit-signup">Register</button>
            </form>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  register: state.register
});

export default connect(mapStateToProps)(Signup);
