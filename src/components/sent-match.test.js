import React from "react";
import { shallow, mount } from "enzyme";

import SentMatch from "./SentMatch";

describe("<SentMatch />", () => {
  it("Should render without crashing", () => {
    shallow(<SentMatch />);
  });
});
