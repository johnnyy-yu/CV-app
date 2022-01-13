import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { change, general } = this.props;
    const { name } = general;

    return (
      <div className="general">
        <div className="generalInput">
          <label htmlFor="firstName" className="genInfo">
            First Name
            <br />
            <input
              type="text"
              id="firstName"
              value={name.firstName}
              onChange={change}
            />
          </label>
          <label htmlFor="lastName" className="genInfo">
            Last Name
            <br />
            <input
              type="text"
              id="lastName"
              value={name.lastName}
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
}

export default General;
