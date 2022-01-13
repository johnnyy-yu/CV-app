import React, { Component } from "react";
import uniqid from "uniqid";

export default class PreviewSkills extends Component {
  constructor(props) {
    super(props);
  }

  skills = (skills) => {
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

  render() {
    const { skills } = this.props;

    return (
      skills.length > 0 && (
        <div className="preview-skills">
          <div className="preview-header">AREAS OF EXPERTISE</div>{" "}
          {this.skills(skills)}
        </div>
      )
    );
  }
}
