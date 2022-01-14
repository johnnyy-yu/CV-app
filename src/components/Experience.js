import React from "react";

function Experience(props) {
  const { change, experience, add } = props;
  const { time } = experience;

  return (
    <div className="experience">
      <div className="experienceInput">
        <label htmlFor="company" className="expInfo">
          Company
          <br />
          <input
            type="text"
            id="company"
            value={experience.company}
            onChange={change}
          />
        </label>
        <label htmlFor="location" className="expInfo">
          Location
          <br />
          <input
            type="text"
            id="location"
            value={experience.location}
            onChange={change}
          />
        </label>
        <label htmlFor="role" className="expInfo">
          Role
          <br />
          <input
            type="text"
            id="role"
            value={experience.role}
            onChange={change}
          />
        </label>
        <label htmlFor="from" className="expInfo">
          From
          <br />
          <input type="month" id="from" value={time.from} onChange={change} />
        </label>
        <label htmlFor="to" className="expInfo">
          To
          <br />
          <input type="month" id="to" value={time.to} onChange={change} />
        </label>
      </div>
      <label htmlFor="description" className="area">
        Description
        <textarea
          type="text"
          id="description"
          value={experience.description}
          onChange={change}
        />
      </label>
      <button
        type="button"
        className="add-button"
        onClick={() => {
          add("exp");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Experience;
