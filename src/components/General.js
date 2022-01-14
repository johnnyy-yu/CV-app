import React from "react";

export default function General(props) {
  const { change, general } = props;
  // const { name } = general;

  return (
    <div className="general">
      <div className="generalInput">
        <label htmlFor="firstName" className="genInfo">
          First Name
          <br />
          <input
            type="text"
            id="firstName"
            value={general.firstName}
            onChange={change}
          />
        </label>
        <label htmlFor="lastName" className="genInfo">
          Last Name
          <br />
          <input
            type="text"
            id="lastName"
            value={general.lastName}
            onChange={change}
          />
        </label>
        <label htmlFor="address" className="genInfo">
          Address
          <br />
          <input
            type="text"
            id="address"
            value={general.address}
            onChange={change}
          />
        </label>
        <label htmlFor="phone" className="genInfo">
          Phone
          <br />
          <input
            type="tel"
            id="phone"
            placeholder="123-456-7890"
            value={general.phone}
            onChange={change}
          />
        </label>
        <label htmlFor="email" className="genInfo">
          Email
          <br />
          <input
            type="email"
            id="email"
            value={general.email}
            onChange={change}
          />
        </label>
        <label htmlFor="linkedin" className="genInfo">
          LinkedIn
          <br />
          <input type="string" id="linkedin" onChange={change} />
        </label>
      </div>
      <label htmlFor="intro" className="area">
        Introduction
        <br />
        <textarea id="intro" onChange={change} />
      </label>
    </div>
  );
}
