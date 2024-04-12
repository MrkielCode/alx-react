import React from "react";
import App from "./App";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications"; // Updated import
import { shallow } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });

  it("should render Notifications component", () => {
    const component = shallow(<App />);
    const notifications = [
      { id: 1, type: "urgent", value: "New course Available" },
      { id: 2, type: "urgent", value: "New resume Available" },
      { id: 3, type: "default", html: { __html: "Latest notification" } },
    ];
    component.find(Notifications).props().listNotifications = notifications; // Set props
    expect(
      component.contains(<Notifications listNotifications={notifications} />)
    ).toBe(true); // Adjusted assertion
  });

  it("should render Header component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });

  it("should render Footer component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Footer />)).toBe(true);
  });

  it("should render CourseList Component", () => {
    const component = shallow(<App />);
    component.setProps({ isLoggedIn: true });
    expect(component.contains(<Login />)).toBe(false);
    expect(component.contains(<CourseList />)).toBe(true);
  });

  it("should render Login Component", () => {
    const component = shallow(<App />);
    component.setProps({ isLoggedIn: false });
    expect(component.contains(<Login />)).toBe(true);
    expect(component.contains(<CourseList />)).toBe(false);
  });
});
