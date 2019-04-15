import React from "react";
import { shallow, mount } from "enzyme";

import PendingMatches from "./PendingMatches";

describe("<PendingMatches />", () => {
  it("Should render without crashing", () => {
    shallow(<PendingMatches />);
  });
});
