import React from "react";
import { shallow, mount } from "enzyme";

import Signup from "./Signup";

describe("<Signup />", () => {
  it("Should render without crashing", () => {
    shallow(<Signup />);
  });
});
