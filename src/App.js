import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./components/Header";
import General from "./components/General";
import Preview from "./components/Preview";
import Education from "./components/Education";
import Experience from "./components/Experience";
import More from "./components/More";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "", lastName: "" },
      address: "",
      phone: "",
      email: "",
      education: [],
      university: {
        university: "",
        eduLocation: "",
        degree: "",
        graduation: {
          eduFrom: "",
          eduTo: "",
        },
      },
      experiences: [],
      experience: {
        company: "",
        location: "",
        role: "",
        description: "",
        time: {
          from: "",
          to: "",
        },
      },
      awards: [],
      award: "",
      skills: [],
      skill: "",
    };

    this.change = this.handleChanges.bind(this);
  }

  handleChanges(e) {
    const state = { ...this.state };

    if (e.target.id === "firstName") {
      state.name.firstName = e.target.value;
      this.setState(state);
    } else if (e.target.id === "lastName") {
      state.name.lastName = e.target.value;
      this.setState(state);
    } else if (e.target.className === "edu") {
      if (e.target.id === "to" || e.target.id === "from") {
        state.university.graduation[`${e.target.id}`] = e.target.value;
        this.setState(state);
      } else {
        state.university[`${e.target.id}`] = e.target.value;
        this.setState(state);
      }
    } else if (e.target.className === "experience") {
      state.experience[`${e.target.id}`] = e.target.value;
    } else {
      this.setState({
        [`${e.target.id}`]: e.target.value,
      });
    }
  }

  render() {
    const {
      name,
      address,
      phone,
      email,
      education,
      university,
      experiences,
      experience,
      awards,
      award,
      skills,
      skill,
    } = this.state;

    return (
      <div className="main">
        <Header />
        hey
        <form>
          <General change={this.change} />
          <Education change={this.change} />
          <Experience change={this.change} />
          <More change={this.change} />
          <button
            data-testid="preview"
            type="button"
            onClick={() => {
              ReactDOM.render(
                <Preview
                  name={name}
                  address={address}
                  phone={phone}
                  email={email}
                  education={education}
                  university={university}
                  experiences={experiences}
                  experience={experience}
                  awards={awards}
                  award={award}
                  skills={skills}
                  skill={skill}
                />,
                document.getElementById("preview")
              );
            }}
          >
            Preview
          </button>
        </form>
        <div id="preview" />
      </div>
    );
  }
}

export default App;
