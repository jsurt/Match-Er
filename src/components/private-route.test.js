import React from "react";
import { shallow, mount } from "enzyme";

import PrivateRoute from "./PrivateRoute";

describe("<PrivateRoute />", () => {
  it("Should render without crashing", () => {
    shallow(<PrivateRoute />);
  });
});
