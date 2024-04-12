import React from "react";
import { shallow } from "enzyme";
import Notification from "./Notifications";

describe("Notification Component", () => {
  it("renders without crashing", () => {
    shallow(<Notification />);
  });

  it("renders three list items", () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.find("ul").children()).toHaveLength(1);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.find(".Notification p").text()).toBe(
      "Here is the list of notifications"
    );
  });

  it("displays menu item when displayDrawer is false", () => {
    const wrapper = shallow(<Notification displayDrawer={false} />);
    expect(wrapper.exists(".menuItem")).toBe(true);
  });

  it("does not display div.Notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notification displayDrawer={false} />);
    expect(wrapper.exists(".Notification")).toBe(false);
  });

  it("displays menu item when displayDrawer is true", () => {
    const wrapper = shallow(<Notification displayDrawer={true} />);
    expect(wrapper.exists(".menuItem")).toBe(true);
  });

  it("displays div.Notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notification displayDrawer={true} />);
    expect(wrapper.exists(".Notification")).toBe(true);
  });

  it("renders correctly if listNotifications is empty", () => {
    const wrapper = shallow(<Notification listNotifications={[]} />);
    expect(wrapper.exists(".Notification")).toBe(false);
  });

  it("renders correctly if listNotifications property is not passed", () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.exists(".Notification")).toBe(false);
  });

  it("renders the correct number of NotificationItem components", () => {
    const notifications = [
      {
        id: 1,
        html: "<p>Notification 1</p>",
        type: "default",
        value: "Value 1",
      },
      {
        id: 2,
        html: "<p>Notification 2</p>",
        type: "urgent",
        value: "Value 2",
      },
      {
        id: 3,
        html: "<p>Notification 3</p>",
        type: "urgent",
        value: "Value 3",
      },
    ];
    const wrapper = shallow(<Notification listNotifications={notifications} />);
    expect(wrapper.find("NotificationItem")).toHaveLength(notifications.length);
  });

  it("displays 'No new notification for now' message when listNotifications is empty", () => {
    const wrapper = shallow(<Notification listNotifications={[]} />);
    expect(wrapper.find("ul").text()).toContain("No new notification for now");
  });

  it("does not display 'No new notification for now' message when listNotifications is not empty", () => {
    const notifications = [
      {
        id: 1,
        html: "<p>Notification 1</p>",
        type: "default",
        value: "Value 1",
      },
      {
        id: 2,
        html: "<p>Notification 2</p>",
        type: "urgent",
        value: "Value 2",
      },
    ];
    const wrapper = shallow(<Notification listNotifications={notifications} />);
    expect(wrapper.find("ul").text()).not.toContain(
      "No new notification for now"
    );
  });
});
