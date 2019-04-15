import React from "react";
import { shallow, mount } from "enzyme";

import ProfileCard from "./ProfileCard";

describe("<ProfileCard />", () => {
  it("Should render without crashing", () => {
    shallow(<ProfileCard />);
  });
});
