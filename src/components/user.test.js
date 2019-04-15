import React from "react";
import { shallow, mount } from "enzyme";

import User from "./User";

describe("<User />", () => {
  it("Should render without crashing", () => {
    shallow(<User />);
  });
});
