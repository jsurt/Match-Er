import React from "react";
import { shallow, mount } from "enzyme";

import UserList from "./UserList";

describe("<UserList />", () => {
  it("Should render without crashing", () => {
    shallow(<UserList />);
  });
});
