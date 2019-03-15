import React from "react";

import Friends from "./Friends";
import Inbox from "./Inbox";
import Navigation from "./Navigation";
import ProfileCard from "./ProfileCard";
import "./Dashboard.css";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSrc: "https://image.flaticon.com/icons/svg/1177/1177568.svg",
      fullName: "John Doe",
      username: "jdoe1997",
      state: "KY",
      friendsCount: 5,
      friends: [
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
        }
      ],
      messageCount: 4,
      messages: [
        {
          from: "Roger Federer",
          sendDate: "3/4/19",
          content:
            "Man you are the best tennis player in the world and i concede my title to you!"
        },
        {
          from: "Christoph Waltz",
          sendDate: "3/4/19",
          content:
            "No i am not an evil nazi general that was just a role i played. Speaking of playing do you want to play tennis tonight?"
        },
        {
          from: "Jack Surtees",
          sendDate: "3/4/19",
          content:
            "oh yeah its my birthday today so I cant hit the courts tonight with you :("
        },
        {
          from: "Jack Surtees",
          sendDate: "3/5/19",
          content: "wait a sec... arent you, actually me??"
        }
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <main>
          <ProfileCard
            avatarSrc={this.state.avatarSrc}
            fullName={this.state.fullName}
            username={this.state.username}
            state={this.state.state}
          />
          <Friends
            friendsCount={this.state.friendsCount}
            friends={this.state.friends}
          />
          <Inbox
            messageCount={this.state.messageCount}
            messages={this.state.messages}
          />
        </main>
      </React.Fragment>
    );
  }
}
