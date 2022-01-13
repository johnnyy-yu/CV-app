import React from "react";
import { format, add } from "date-fns";

function EducationOverview(props) {
  const { education, edit, remove } = props;

  const educationList = education.map((university) => (
    <li key={university.id}>
      {university.university}, {university.eduLocation} <br />{" "}
      {university.degree}{" "}
      {university.graduation &&
        format(
          add(new Date(university.graduation), { months: 1 }),
          "MMMM yyyy "
        )}
      <br />
      <button
        type="button"
        className="edit-button"
        onClick={() => edit(university.id)}
      >
        Edit
      </button>
      <button
        type="button"
        className="remove-button"
        onClick={() => remove("education", university.id)}
      >
        Remove
      </button>
    </li>
  ));

  return education.length > 0 ? (
    <div className="educationOverview">
      <div className="overview-header">Education</div>
      {educationList}
    </div>
  ) : (
    <div className="educationOverview">
      <div className="overview-header">Education</div>
    </div>
  );
}

export default EducationOverview;
