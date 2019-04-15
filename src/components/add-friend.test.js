import React from "react";
import { shallow, mount } from "enzyme";

import AddFriend from "./AddFriend";

describe("<AddFriend />", () => {
  it("Should render without crashing", () => {
    shallow(<AddFriend />);
  });
});
