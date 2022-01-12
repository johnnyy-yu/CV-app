import React from "react";
import { format, add } from "date-fns";

function Overview(props) {
  const { education, edit, remove } = props;

  const educationList = education.map((university) => (
    <li key={university.id}>
      {university.university} {university.eduLocation} {university.degree}{" "}
      {university.graduation &&
        format(
          add(new Date(university.graduation), { months: 1 }),
          "MMMM yyyy "
        )}
      <button type="button" onClick={() => edit(university.id)}>
        Edit
      </button>
      <button type="button" onClick={() => remove("education", university.id)}>
        Remove
      </button>
    </li>
  ));

  return (
    education.length > 0 && (
      <div className="educationOverview">{educationList}</div>
    )
  );
}

export default Overview;
