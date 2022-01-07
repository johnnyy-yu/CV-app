import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { change } = this.props;

    return (
      <div className="education">
        <label htmlFor="educationInput">
          Education Information
          <label htmlFor="university">
            University:
            <input
              type="text"
              className="edu"
              id="university"
              onChange={change}
            />
          </label>
          <label htmlFor="location">
            Location:
            <input
              type="text"
              className="edu"
              id="eduLocation"
              onChange={change}
            />
          </label>
          <label htmlFor="degree">
            Degree:
            <input type="text" className="edu" id="degree" onChange={change} />
          </label>
          <label htmlFor="graduation">
            Graduation:
            <label htmlFor="from" id="graduation">
              From:
              <input
                type="month"
                className="edu"
                id="eduFrom"
                onChange={change}
              />
            </label>
            <label htmlFor="to" id="graduation">
              To:
              <input
                type="month"
                className="edu"
                id="eduTo"
                onChange={change}
              />
            </label>
          </label>
        </label>
      </div>
    );
  }
}

export default Education;
