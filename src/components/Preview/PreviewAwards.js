import React from "react";
import uniqid from "uniqid";

export default function PreviewAwards(props) {
  const awardsMap = (awards) => {
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

  const { awards } = props;

  return (
    awards.length > 0 && (
      <div className="preview-awards">
        <div className="preview-header">AWARDS</div> {awardsMap(awards)}
      </div>
    )
  );
}
