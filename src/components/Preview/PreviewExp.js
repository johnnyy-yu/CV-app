import React from "react";
import { format, add } from "date-fns";

export default function PreviewExp(props) {
  const experiencesMap = (experiences) => (
    <div>
      {experiences.map((experience) => (
        <div key={experience.id} className="experience-container">
          <div className="role">{experience.role}</div>
          <div className="company">{experience.company}</div>
          <div className="time">
            {experience.time.from &&
              format(
                add(new Date(experience.time.from), { months: 1 }),
                "MMMM yyyy "
              )}
            {" - "}
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

  const { experiences } = props;

  return (
    experiences.length > 0 && (
      <div className="preview-experience">
        <div className="preview-header">EXPERIENCE</div>{" "}
        {experiencesMap(experiences)}
      </div>
    )
  );
}
