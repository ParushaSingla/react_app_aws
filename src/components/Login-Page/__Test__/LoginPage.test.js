import React from "react";
import LoginPage from "../LoginPage";
import { ToastProvider } from "react-toast-notifications";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
jest.mock("rc-util/lib/Portal");
let container;
beforeEach(() => {
  container = mount(
    <ToastProvider>
      <LoginPage />
    </ToastProvider>
  );
});

afterEach(() => {
  container.unmount();
  container = null;
});
test("Snapshot testing", () => {
  expect(container).toMatchSnapshot();
});
test("if fields are emplty the login button is disabled", () => {
  const stateSetter = jest.fn();
  jest.spyOn(React, "useState").mockImplementation((stateValue) => [
    (stateValue = {
      username: "",
      password: "",
    }),
    stateSetter,
  ]);
  container.setState({
    username: "",
    password: "",
  });
  expect(container.find("button").prop("disabled")).toBeTruthy();
});
