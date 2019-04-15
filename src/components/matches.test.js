import React from "react";
import { shallow, mount } from "enzyme";

import Matches from "./Matches";

describe("<Matches />", () => {
  it("Should render without crashing", () => {
    shallow(<Matches />);
  });
});
