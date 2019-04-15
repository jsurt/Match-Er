import React from "react";
import { shallow, mount } from "enzyme";

import Login from "./Login";

describe("<Login />", () => {
  it("Should render without crashing", () => {
    shallow(<Login />);
  });
});
