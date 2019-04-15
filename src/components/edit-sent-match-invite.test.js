import React from "react";
import { shallow, mount } from "enzyme";

import EditSentMatchInvite from "./EditSentMatchInvite";

describe("<EditSentMatchInvite />", () => {
  it("Should render without crashing", () => {
    shallow(<EditSentMatchInvite />);
  });
});
