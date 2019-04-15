import React from "react";
import { shallow, mount } from "enzyme";

import MatchesDashboard from "./MatchesDashboard";

describe("<MatchesDashboard />", () => {
  it("Should render without crashing", () => {
    shallow(<MatchesDashboard />);
  });
});
