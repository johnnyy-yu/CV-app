import React from "react";

import PreviewGeneral from "./Preview/PreviewGeneral";
import PreviewSkills from "./Preview/PreviewSkills";
import PreviewEdu from "./Preview/PreviewEdu";
import PreviewExp from "./Preview/PreviewExp";
import PreviewAwards from "./Preview/PreviewAwards";
import Header from "./Header";

import "../Preview.css";

function Preview(props) {
  const { state } = props;
  return (
    <div id="preview">
      <Header backButton />
      <PreviewGeneral general={state.general} />
      <PreviewSkills skills={state.skills} />
      <PreviewAwards awards={state.awards} />
      <PreviewEdu education={state.education} />
      <PreviewExp experiences={state.experiences} />
    </div>
  );
}

export default Preview;
