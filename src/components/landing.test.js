import React from "react";
import { shallow, mount } from "enzyme";

import Landing from "./Landing";

describe("<Landing />", () => {
  it("Should render without crashing", () => {
    shallow(<Landing />);
  });
});
