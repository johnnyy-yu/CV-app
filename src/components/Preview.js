import React, { Component } from "react";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      address,
      phone,
      email,
      education,
      university,
      experiences,
      experience,
      awards,
      award,
      skills,
      skill,
    } = this.props;
    return (
      <div>
        <div>
          {name.firstName} {name.lastName} {address} {phone} {email} {education}{" "}
          {university.university} {university.eduLocation} {university.degree}{" "}
          {university.graduation.eduFrom} {university.graduation.eduTo}{" "}
          {experiences} {experience.company} {experience.location}{" "}
          {experience.role} {experience.description} {experience.time.from}{" "}
          {experience.time.to} {awards} {award} {skills} {skill}
        </div>
      </div>
    );
  }
}

export default Preview;
