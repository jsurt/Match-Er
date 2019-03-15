import React from "react";

import UserList from "./UserList";
import "./Community.css";

export default class Community extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "country",
      users: [
        {
          name: "Jane Doe",
          username: "jdoe1234",
          state: "NY"
        },
        {
          name: "Brad Pitt",
          username: "tennisFiend",
          state: "TN"
        },
        {
          name: "Roger Federer",
          username: "worldsBest",
          state: "CA"
        },
        {
          name: "Jack Surtees",
          username: "betterThanrogEr",
          state: "NY"
        },
        {
          name: "Christoph Waltz",
          username: "AlwaysthebadGuy",
          state: "WY"
        },
        {
          name: "Otto Labadie",
          username: "bechtelar",
          state: "WY"
        },
        {
          name: "Tianna Mante",
          username: "erde.verlie",
          state: "OH"
        },
        {
          name: "Manley Deckow",
          username: "mariano53",
          state: "AZ"
        },
        {
          name: "Mckayla Krajcik",
          username: "yost.marion",
          state: "IL"
        },
        {
          name: "Maximilian Nicolas",
          username: "maxnic",
          state: "TN"
        },
        {
          name: "John Smith",
          username: "johnsm",
          state: "AK"
        },
        {
          name: "Bill Ted",
          username: "wonderfulAdventure",
          state: "MN"
        },
        {
          name: "Al Pacino",
          username: "GoDfAtHeR",
          state: "NY"
        },
        {
          name: "Connie Demicko",
          username: "connieD",
          state: "WY"
        },
        {
          name: "Frank Sinatra",
          username: "blueEyes",
          state: "WY"
        },
        {
          name: "Charles de Gaulle",
          username: "whiteFlag",
          state: "FRA"
        },
        {
          name: "Winston Churchill",
          username: "mariano53",
          state: "AZ"
        },
        {
          name: "George Washington",
          username: "gwash",
          state: "IL"
        }
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <header className="community-header">
          <h1 className="community-h1">Community</h1>
          <p className="community-subhead">Sort by state or entire country</p>
        </header>
        <main>
          <div className="user-filter-wrap">
            <span className="radio-btn-wrap state">
              <label for="state" className="radio-btn-label">
                State
              </label>
              <input
                type="radio"
                name="button"
                value="state"
                id="state"
                checked
              />
            </span>
            <span className="radio-btn-wrap country">
              <label for="country">Country</label>
              <input type="radio" name="button" value="country" id="country" />
            </span>
          </div>
          <UserList filter={this.state.filter} users={this.state.users} />
        </main>
      </React.Fragment>
    );
  }
}
