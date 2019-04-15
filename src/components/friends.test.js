import React from "react";
import { shallow, mount } from "enzyme";

import Friends from "./Friends";

describe("<Friends />", () => {
  it("Should render without crashing", () => {
    shallow(<Friends />);
  });
});
