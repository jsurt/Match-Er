import React from "react";
import { shallow, mount } from "enzyme";

import CompletedMatches from "./CompletedMatches";

describe("<CompletedMatches />", () => {
  it("Should render without crashing", () => {
    shallow(<CompletedMatches />);
  });
});
