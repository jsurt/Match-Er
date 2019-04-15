import React from "react";
import { shallow, mount } from "enzyme";

import EditReceivedMatchInvite from "./EditReceivedMatchInvite";

describe("<EditReceivedMatchInvite />", () => {
  it("Should render without crashing", () => {
    shallow(<EditReceivedMatchInvite />);
  });
  it("Should render a comment from when editing", () => {
    const wrapper = shallow(<EditReceivedMatchInvite />);
    wrapper.instance().setEditing(true);
    expect(wrapper.state("editing")).toEqual(true);
  });
});
