import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList component", () => {
  it("renders CourseList component without crashing", () => {
    shallow(<CourseList />);
  });

  it("renders the 5 different rows", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find("CourseListRow")).toHaveLength(5);
  });

  describe("With CourseList Empty", () => {
    it("renders 'No Course Available' when listCourses is empty", () => {
      const wrapper = shallow(<CourseList />);
      expect(wrapper.find("tbody").text()).toContain("No Course Available");
    });
  });

  describe("With CourseList containing elements", () => {
    const courses = [
      { id: 1, name: "Course 1", credit: 3 },
      { id: 2, name: "Course 2", credit: 4 },
    ];

    it("renders the list of courses correctly", () => {
      const wrapper = shallow(<CourseList listCourses={courses} />);
      expect(wrapper.find("CourseListRow")).toHaveLength(courses.length + 2); // +2 for the header rows
    });

    it("renders each course with correct name and credit", () => {
      const wrapper = shallow(<CourseList listCourses={courses} />);
      courses.forEach((course) => {
        expect(wrapper.find({ textFirstCell: course.name })).toHaveLength(1);
        expect(
          wrapper.find({ textSecondCell: course.credit.toString() })
        ).toHaveLength(1);
      });
    });
  });
});
