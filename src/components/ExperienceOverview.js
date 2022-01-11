import React from "react";
import { format, add } from "date-fns";

function ExperienceOverview(props) {
  const { experiences, edit, remove } = props;

  const timeFrom = (experience) =>
    experience.time.from &&
    format(add(new Date(experience.time.from), { months: 1 }), "MMMM yyyy ");

  const timeTo = (experience) =>
    experience.time.to &&
    format(add(new Date(experience.time.to), { months: 1 }), "MMMM yyyy ");

  const experienceList = experiences.map((experience) => (
    <li key={experience.id}>
      {experience.company} {experience.location} {experience.role}{" "}
      {experience.description} {timeFrom(experience)}
      {timeTo(experience)}
      <button type="button" onClick={() => edit(experience.id)}>
        Edit
      </button>
      <button
        type="button"
        onClick={() => remove("experiences", experience.id)}
      >
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
