import React from "react";
import { shallow, mount } from "enzyme";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("Should render without crashing", () => {
    shallow(<Dashboard />);
  });
});
