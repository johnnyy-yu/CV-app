import React from "react";

function Education(props) {
  const { change, university, add } = props;

  return (
    <div className="education">
      <div className="educationInput">
        <label htmlFor="university" className="eduInfo">
          University
          <br />
          <input
            onChange={change}
            type="text"
            id="university"
            value={university.university}
          />
        </label>
        <label htmlFor="location" className="eduInfo">
          Location
          <br />
          <input
            type="text"
            className="edu"
            id="eduLocation"
            value={university.eduLocation}
            onChange={change}
          />
        </label>
        <label htmlFor="degree" className="eduInfo">
          Degree
          <br />
          <input
            type="text"
            className="edu"
            id="degree"
            value={university.degree}
            onChange={change}
          />
        </label>
        <label htmlFor="graduation" className="eduInfo">
          Graduation
          <br />
          <label htmlFor="from" id="graduation">
            <input
              type="month"
              className="edu"
              id="graduation"
              value={university.graduation}
              onChange={change}
            />
          </label>
        </label>
      </div>
      <button
        type="button"
        className="add-button"
        onClick={() => {
          add("edu");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Education;
