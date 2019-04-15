import React from "react";
import { shallow, mount } from "enzyme";

import MatchInvite from "./MatchInvite";

describe("<MatchInvite />", () => {
  it("Should render without crashing", () => {
    shallow(<MatchInvite />);
  });
});
