import React, { Component } from "react";
import uniqid from "uniqid";

export default class PreviewSkills extends Component {
  constructor(props) {
    super(props);
  }

  skills = (skills) => {
    const array = skills.split(",");

    return (
      <div>
        <ul>
          {array.map((element) => (
            <li key={uniqid()}>{element}</li>
          ))}
        </ul>
      </div>
    );
  };

  render() {
    const { skills } = this.props;

    return (
      skills.length > 0 && (
        <div className="preview-skills">Skills {this.skills(skills)}</div>
      )
    );
  }
}
