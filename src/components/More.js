import React, { Component } from "react";

class More extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { change } = this.props;
    return (
      <div className="more">
        More Information
        <label htmlFor="award">
          Awards:
          <input onChange={change} type="text" id="award" />
        </label>
        <label htmlFor="skill">
          Skills:
          <input onChange={change} type="text" id="skill" />
        </label>
      </div>
    );
  }
}

export default More;
