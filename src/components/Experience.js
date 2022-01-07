import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { change } = this.props;

    return (
      <div className="experience">
        Experience Information
        <label htmlFor="company">
          Company Name:
          <input
            className="experience"
            type="text"
            id="company"
            onChange={change}
          />
        </label>
        <label htmlFor="location">
          Location:
          <input
            className="experience"
            type="text"
            id="location"
            onChange={change}
          />
        </label>
        <label htmlFor="role">
          Role:
          <input
            className="experience"
            type="text"
            id="role"
            onChange={change}
          />
        </label>
        <label htmlFor="description">
          Description:
          <input
            className="experience"
            type="text"
            id="description"
            onChange={change}
          />
        </label>
        <label htmlFor="from">
          From:
          <input
            className="experience"
            type="month"
            id="from"
            onChange={change}
          />
        </label>
        <label htmlFor="to">
          To:
          <input
            className="experience"
            type="month"
            id="to"
            onChange={change}
          />
        </label>
      </div>
    );
  }
}

export default Experience;
