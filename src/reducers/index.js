import * as actions from "../actions";

const initialState = {
  user: {
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
  },
  community: {
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
  }
};

export const appReducer = (state = initialState, action) => {
  if (action.type === actions.TEST_USER) {
    console.log("test");
  }
  return state;
};
