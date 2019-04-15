import React from "react";
import { shallow, mount } from "enzyme";

import Navigation from "./Navigation";

describe("<Navigation />", () => {
  it("Should render without crashing", () => {
    shallow(<Navigation />);
  });
});
