import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { change } = this.props;

    return (
      <div className="general">
        General Information
        <label htmlFor="firstName">
          First Name:
          <input type="text" id="firstName" onChange={change} />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input type="text" id="lastName" onChange={change} />
        </label>
        <label htmlFor="address">
          Address:
          <input type="text" id="address" onChange={change} />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" onChange={change} />
        </label>
      </div>
    );
  }
}

// const General = (props) => {
//   const { change } = props
// }

export default General;
