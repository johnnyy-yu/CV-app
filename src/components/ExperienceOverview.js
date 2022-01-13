import React from "react";
import { format, add } from "date-fns";

function ExperienceOverview(props) {
  const { experiences, edit, remove } = props;

  const experienceList = experiences.map((experience) => (
    <li key={experience.id}>
      {experience.company}, {experience.location}
      <br /> {experience.role} <br />
      {experience.time.from &&
        format(
          add(new Date(experience.time.from), { months: 1 }),
          "MMMM yyyy "
        )}
      {" - "}
      {experience.time.to &&
        format(add(new Date(experience.time.to), { months: 1 }), "MMMM yyyy ")}
      <br />
      {experience.description} <br />
      <button
        type="button"
        className="edit-button"
        onClick={() => edit(experience.id)}
      >
        Edit
      </button>
      <button
        type="button"
        className="remove-button"
        onClick={() => remove("experiences", experience.id)}
      >
        Remove
      </button>
    </li>
  ));

  return experiences.length > 0 ? (
    <div className="experienceOverview">
      <div className="overview-header">Experience</div>
      {experienceList}
    </div>
  ) : (
    <div className="experienceOverview">
      <div className="overview-header">Experience</div>
    </div>
  );
}

export default ExperienceOverview;
