import React, { Component } from "react";
import EducationOverview from "./EducationOverview";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { change, edit, remove, education, university } = this.props;
    const { graduation } = university;

    return (
      <div className="education">
        Education Information:
        <EducationOverview education={education} edit={edit} remove={remove} />
        <div className="educationInput">
          <label htmlFor="university">
            University:
            <input
              onChange={change}
              type="text"
              className="edu"
              id="university"
              value={university.university}
            />
          </label>
          <label htmlFor="location">
            Location:
            <input
              type="text"
              className="edu"
              id="eduLocation"
              value={university.eduLocation}
              onChange={change}
            />
          </label>
          <label htmlFor="degree">
            Degree:
            <input
              type="text"
              className="edu"
              id="degree"
              value={university.degree}
              onChange={change}
            />
          </label>
          <label htmlFor="graduation">
            Graduation:
            <label htmlFor="from" id="graduation">
              From:
              <input
                type="month"
                className="edu"
                id="eduFrom"
                value={graduation.eduFrom}
                onChange={change}
              />
            </label>
            <label htmlFor="to" id="graduation">
              To:
              <input
                type="month"
                className="edu"
                id="eduTo"
                value={graduation.eduTo}
                onChange={change}
                required
              />
            </label>
          </label>
        </div>
      </div>
    );
  }
}

export default Education;
