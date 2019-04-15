import React from "react";
import { shallow, mount } from "enzyme";

import Comment from "./Comment";

describe("<Comment />", () => {
  it("Should render without crashing", () => {
    shallow(<Comment />);
  });
});
