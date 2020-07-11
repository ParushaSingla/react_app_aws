import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LogOut from "../LogOut";
import TestRenderer from "react-test-renderer";
import { UserProvider } from "../../../contextAPI/userContext";

import { BrowserRouter as Router } from "react-router-dom";
configure({ adapter: new Adapter() });
describe("LogOut component", () => {
  const state = {
    username: "",
    isLoggedIn: false,
  };
  const updateValue = (user) => {};
  let container;
  beforeEach(() => {
    container = new TestRenderer.create(
      (
        <Router>
          <UserProvider value={{ state, updateValue }}>
            <LogOut />
          </UserProvider>
        </Router>
      )
    );
  });

  afterEach(() => {
    container.unmount();
    container = null;
  });

  it("if isLoggedIn is false than login Button should be there", () => {
    const element = container;
    expect(element.root.findByType("button").children).toEqual(["Login In"]);
  });

});
describe('when user is logged in', () => {
  const state = {
    username: "Parusha",
    isLoggedIn: true,
  };
  const updateValue = (user) => {};
  let container;
  beforeEach(() => {
    container = new TestRenderer.create(
      (
        <Router>
          <UserProvider value={{ state, updateValue }}>
            <LogOut />
          </UserProvider>
        </Router>
      )
    );
  });
  it('check loggout functionality',()=>{
    const instance = container.root;
    const button = instance.findAllByType("button")[1] ;
    expect(button.children).toEqual(["Log Out"]);
  })
})
