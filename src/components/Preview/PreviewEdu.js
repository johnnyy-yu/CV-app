import React from "react";

export default function PreviewEdu(props) {
  const educationMap = (education) => (
    <div>
      {education.map((university) => (
        <div key={university.id} className="university-container">
          <div className="university-degree-graduation">
            {university.degree}, {university.graduation.slice(0, 4)}
          </div>
          <div className="university-name-location">
            {university.university}, {university.eduLocation}
          </div>
        </div>
      ))}
    </div>
  );

  const { education } = props;

  return (
    education.length > 0 && (
      <div className="preview-education">
        <div className="preview-header">EDUCATION</div>{" "}
        {educationMap(education)}
      </div>
    )
  );
}
