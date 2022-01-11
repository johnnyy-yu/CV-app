import React from "react";
import { format } from "date-fns";

function Overview(props) {
  const { education, edit, remove } = props;

  const educationList = education.map((university) => (
    <li key={university.id}>
      {university.university} {university.eduLocation} {university.degree} From:{" "}
      {format(new Date(university.graduation.eduFrom), "MMMM yyyy")} To:{" "}
      {format(new Date(university.graduation.eduTo), "MMMM yyyy")}
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
