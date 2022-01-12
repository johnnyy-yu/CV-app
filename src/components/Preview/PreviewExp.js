import React, { Component } from "react";
import { format, add } from "date-fns";

export default class PreviewExp extends Component {
  constructor(props) {
    super(props);
  }

  experiences = (experiences) => (
    <div>
      {experiences.map((experience) => (
        <div key={experience.id} className={experience.company}>
          <div className="role">{experience.role}</div>
          <div className="company">{experience.company}</div>
          <div className="time">
            {experience.time.from &&
              format(
                add(new Date(experience.time.from), { months: 1 }),
                "MMMM yyyy "
              )}{" "}
            {experience.time.to &&
              format(
                add(new Date(experience.time.to), { months: 1 }),
                "MMMM yyyy "
              )}
          </div>
          <div className="description">{experience.description}</div>
        </div>
      ))}
    </div>
  );

  render() {
    const { experiences } = this.props;

    return (
      experiences.length > 0 && (
        <div className="preview-experience">
          Experience {this.experiences(experiences)}
        </div>
      )
    );
  }
}
