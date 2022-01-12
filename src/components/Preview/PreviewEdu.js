import React, { Component } from "react";

export default class PreviewEdu extends Component {
  constructor(props) {
    super(props);
  }

  education = (education) => (
    <div>
      {education.map((university) => (
        <div key={university.id} className={university.university}>
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

  render() {
    const { education } = this.props;

    return (
      education.length > 0 && (
        <div className="preview-education">
          Education {this.education(education)}
        </div>
      )
    );
  }
}
