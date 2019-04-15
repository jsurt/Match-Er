import React from "react";
import { shallow, mount } from "enzyme";

import AcceptedMatches from "./AcceptedMatches";

describe("<AcceptedMatches />", () => {
  it("Should render without crashing", () => {
    shallow(<AcceptedMatches />);
  });
});
