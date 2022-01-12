import React, { Component } from "react";
import PreviewGeneral from "./Preview/PreviewGeneral";
import PreviewSkills from "./Preview/PreviewSkills";
import PreviewEdu from "./Preview/PreviewEdu";
import PreviewExp from "./Preview/PreviewExp";
import PreviewAwards from "./Preview/PreviewAwards";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state } = this.props;
    return (
      <div className="preview">
        <PreviewGeneral general={state.general} />
        <PreviewSkills skills={state.skills} />
        <PreviewEdu education={state.education} />
        <PreviewExp experiences={state.experiences} />
        <PreviewAwards awards={state.awards} />
      </div>
    );
  }
}

export default Preview;
