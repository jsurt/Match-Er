import React from "react";
import { shallow, mount } from "enzyme";

import ReceivedMatch from "./ReceivedMatch";

describe("<ReceivedMatch />", () => {
  it("Should render without crashing", () => {
    shallow(<ReceivedMatch />);
  });
});
