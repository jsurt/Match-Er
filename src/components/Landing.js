import React from "react";
import "./Landing.css";

export default class Landing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="landing-header">
          <h1 className="landing-head">Match-Er</h1>
          <p className="landing-subhead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </header>
        <main>
          <section className="find">
            <h2 className="find-header">Find</h2>
            <p className="find-body">
              Use Match-Er to find other tennis players near you or wait for
              them to find you
            </p>
          </section>
          <section className="connect">
            <h2 className="connect-header">Connect</h2>
            <p className="connect-body">
              Connect with your fellow tennis players thru Match-Er's messaging
              feature
            </p>
          </section>
          <section className="play">
            <h2 className="play-header">Play</h2>
            <p className="play-body">
              Now that you've found players near you and have connected with
              them, all that's left to do is hit the courts!
            </p>
          </section>
        </main>
      </React.Fragment>
    );
  }
}
