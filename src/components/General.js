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
        General Information:
        <div className="generalInput">
          <label htmlFor="firstName">
            First Name:
            <input
              type="text"
              className="genInfo"
              id="firstName"
              value={name.firstName}
              onChange={change}
            />
          </label>
          <label htmlFor="lastName">
            Last Name:
            <input
              type="text"
              className="genInfo"
              id="lastName"
              value={name.lastName}
              onChange={change}
            />
          </label>
          <label htmlFor="address">
            Address:
            <input
              type="text"
              className="genInfo"
              id="address"
              value={general.address}
              onChange={change}
            />
          </label>
          <label htmlFor="phone">
            Phone Number:
            <input
              type="tel"
              id="phone"
              className="genInfo"
              placeholder="123-456-7890"
              value={general.phone}
              onChange={change}
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              className="genInfo"
              id="email"
              value={general.email}
              onChange={change}
            />
          </label>
          <label htmlFor="linkedin">
            LinkedIn:
            <input type="string" id="linkedin" onChange={change} />
          </label>
          <label htmlFor="intro">
            Introduction:
            <textarea id="intro" onChange={change} />
          </label>
        </div>
      </div>
    );
  }
}

export default General;
