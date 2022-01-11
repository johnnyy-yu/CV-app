import React, { Component } from "react";
import ExperienceOverview from "./ExperienceOverview";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { change, edit, remove, experiences, experience } = this.props;
    const { time } = experience;

    return (
      <div className="experience">
        Experience Information:
        <ExperienceOverview
          experiences={experiences}
          edit={edit}
          remove={remove}
        />
        <div className="experienceInput">
          <label htmlFor="company">
            Company Name:
            <input
              className="experience"
              type="text"
              id="company"
              value={experience.company}
              onChange={change}
            />
          </label>
          <label htmlFor="location">
            Location:
            <input
              className="experience"
              type="text"
              id="location"
              value={experience.location}
              onChange={change}
            />
          </label>
          <label htmlFor="role">
            Role:
            <input
              className="experience"
              type="text"
              id="role"
              value={experience.role}
              onChange={change}
            />
          </label>
          <label htmlFor="description">
            Description:
            <textarea
              className="experience"
              type="text"
              id="description"
              value={experience.description}
              onChange={change}
            />
          </label>
          <label htmlFor="from">
            From:
            <input
              className="experience"
              type="month"
              id="from"
              value={time.from}
              onChange={change}
            />
          </label>
          <label htmlFor="to">
            To:
            <input
              className="experience"
              type="month"
              id="to"
              value={time.to}
              onChange={change}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default Experience;
