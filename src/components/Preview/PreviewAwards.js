import React, { Component } from "react";
import uniqid from "uniqid";

export default class PreviewAwards extends Component {
  constructor(props) {
    super(props);
  }

  awards = (awards) => {
    const array = awards.split(",");

    return (
      <div>
        <ul>
          {array.map((award) => (
            <li key={uniqid()}>{award}</li>
          ))}
        </ul>
      </div>
    );
  };

  render() {
    const { awards } = this.props;

    return (
      awards.length > 0 && (
        <div className="preview-awards">Awards {this.awards(awards)}</div>
      )
    );
  }
}
