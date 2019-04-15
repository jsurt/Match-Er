import React from "react";
import { shallow, mount } from "enzyme";

import Community from "./Community";

describe("<Community />", () => {
  it("Should render without crashing", () => {
    shallow(<Community />);
  });
});
