import React from "react";
import { format } from "date-fns";

function ExperienceOverview(props) {
  const { experiences, edit, remove } = props;

  const experienceList = experiences.map((experience) => (
    <li key={experience.id}>
      {experience.company} {experience.location} {experience.role}{" "}
      {experience.description}{" "}
      {format(new Date(experience.time.from), "MMMM yyyy")}{" "}
      {format(new Date(experience.time.to), "MMMM yyyy")}
      <button type="button" onClick={() => edit(experience.id)}>
        Edit
      </button>
      <button type="button" onClick={() => remove("experience", experience.id)}>
        Remove
      </button>
    </li>
  ));

  return (
    experiences.length > 0 && (
      <div className="experienceOverview">{experienceList}</div>
    )
  );
}

export default ExperienceOverview;
