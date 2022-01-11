import React from "react";
import { format, add } from "date-fns";

function Overview(props) {
  const { education, edit, remove } = props;

  const eduFrom = (university) =>
    university.graduation.eduFrom &&
    format(
      add(new Date(university.graduation.eduFrom), { months: 1 }),
      "MMMM yyyy "
    );

  const eduTo = (university) =>
    university.graduation.eduTo &&
    format(
      add(new Date(university.graduation.eduTo), { months: 1 }),
      "MMMM yyyy "
    );

  const educationList = education.map((university) => (
    <li key={university.id}>
      {university.university} {university.eduLocation} {university.degree}{" "}
      {eduFrom(university)} {eduTo(university)}
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
