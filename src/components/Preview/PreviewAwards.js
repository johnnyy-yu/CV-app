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
        <ul className="awards-container">
          {array.map((award) => (
            <li className="awards" key={uniqid()}>
              {award}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  render() {
    const { awards } = this.props;

    return (
      awards.length > 0 && (
        <div className="preview-awards">
          <div className="preview-header">AWARDS</div> {this.awards(awards)}
        </div>
      )
    );
  }
}
