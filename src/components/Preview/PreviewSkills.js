import React from "react";
import uniqid from "uniqid";

export default function PreviewSkills(props) {
  const skillsMap = (skills) => {
    const array = skills.split(",");

    return (
      <ul className="skills-container">
        {array.map((element) => (
          <li className="skill" key={uniqid()}>
            {element}
          </li>
        ))}
      </ul>
    );
  };

  const { skills } = props;

  return (
    skills.length > 0 && (
      <div className="preview-skills">
        <div className="preview-header">AREAS OF EXPERTISE</div>{" "}
        {skillsMap(skills)}
      </div>
    )
  );
}
