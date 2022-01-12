import React, { Component } from "react";

class PreviewGeneral extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { general } = this.props;
    return (
      <div className="preview-general">
        <div className="name">
          {general.name.firstName} {general.name.lastName}
        </div>
        <div className="general-intro">{general.intro}</div>
        <div className="general-info">
          <div className="general-address">{general.address} </div>{" "}
          <div className="general-phone">{general.phone}</div>{" "}
          <div className="general-email">{general.email}</div>{" "}
          <div className="general-linkedin">{general.linkedin}</div>
        </div>
      </div>
    );
  }
}

export default PreviewGeneral;
