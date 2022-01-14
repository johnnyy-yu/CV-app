import React from "react";
import locationIcon from "../icons/outline_location_on_white_24dp.png";
import phoneIcon from "../icons/outline_phone_iphone_white_24dp.png";
import emailIcon from "../icons/outline_email_white_24dp.png";
import linkedinIcon from "../icons/linkedin-3-24.png";

export default function PreviewGeneral(props) {
  const { general } = props;
  return (
    <div className="preview-general">
      <div className="name">
        {general.name.firstName} {general.name.lastName}
      </div>
      <div className="general-intro">{general.intro}</div>
      <div className="general-info">
        <div className="gen-container">
          <img className="icons" src={locationIcon} alt="logo" />
          <div className="general-address">{general.address} </div>{" "}
        </div>
        <div className="gen-container">
          <img className="icons" src={phoneIcon} alt="logo" />
          <div className="general-phone">{general.phone}</div>{" "}
        </div>
        <div className="gen-container">
          <img className="icons" src={emailIcon} alt="logo" />
          <div className="general-email">{general.email}</div>{" "}
        </div>
        <div className="gen-container">
          <img className="icons" src={linkedinIcon} alt="logo" />
          <div className="general-linkedin">{general.linkedin}</div>
        </div>
      </div>
    </div>
  );
}
