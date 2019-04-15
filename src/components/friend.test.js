import React from "react";
import { shallow, mount } from "enzyme";

import Friend from "./Friend";

describe("<Friend />", () => {
  it("Should render without crashing", () => {
    shallow(<Friend />);
  });
});
