import React, { useState } from "react";
import uniqid from "uniqid";

import "./App.css";
import "./Preview.css";

import Header from "./components/Header";
import General from "./components/General";
import Preview from "./components/Preview";
import Education from "./components/Education";
import Experience from "./components/Experience";
import More from "./components/More";
import EducationOverview from "./components/EducationOverview";
import ExperienceOverview from "./components/ExperienceOverview";

function App() {
  const [state, setState] = useState({
    general: {
      name: { firstName: "", lastName: "" },
      address: "",
      phone: "",
      email: "",
      linkedin: "",
      intro: "",
    },

    education: [],
    university: {
      id: uniqid(),
      university: "",
      eduLocation: "",
      degree: "",
      graduation: "",
    },
    experiences: [],
    experience: {
      id: uniqid(),
      company: "",
      location: "",
      role: "",
      description: "",
      time: {
        from: "",
        to: "",
      },
    },
    awards: "",
    skills: "",
  });

  const generalChanges = (e) => {
    const thisState = { ...state };
    const { general } = thisState;
    const { name } = general;

    if (e.target.id === "firstName") {
      name.firstName = e.target.value;
    } else if (e.target.id === "lastName") {
      name.lastName = e.target.value;
    } else {
      general[e.target.id] = e.target.value;
    }

    setState(thisState);
  };

  const eduChanges = (e) => {
    const thisState = { ...state };
    const { university } = thisState;

    university[e.target.id] = e.target.value;

    setState(thisState);
  };

  const editEdu = (key) => {
    const thisState = { ...state };
    const { university } = thisState;

    thisState.education.forEach((school) => {
      if (school.id === key) {
        university.id = school.id;
        university.university = school.university;
        university.eduLocation = school.eduLocation;
        university.degree = school.degree;
        university.graduation = school.graduation;

        thisState.education = thisState.education.filter(
          (edu) => edu.id !== key
        );
      }

      setState(thisState);
    });
  };

  const expChanges = (e) => {
    const thisState = { ...state };
    const { experience } = thisState;
    const { time } = experience;

    if (e.target.id === "to") {
      time.to = e.target.value;
    } else if (e.target.id === "from") {
      time.from = e.target.value;
    } else {
      experience[e.target.id] = e.target.value;
    }

    setState(thisState);
  };

  const editExp = (key) => {
    const thisState = { ...state };
    const { experience } = thisState;

    thisState.experiences.forEach((exp) => {
      if (exp.id === key) {
        experience.id = exp.id;
        experience.company = exp.company;
        experience.location = exp.location;
        experience.role = exp.role;
        experience.description = exp.description;
        experience.time.from = exp.time.from;
        experience.time.to = exp.time.to;

        thisState.experiences = thisState.experiences.filter(
          (work) => work.id !== key
        );
      }

      setState(thisState);
    });
  };

  const moreChanges = (e) => {
    const thisState = { ...state };

    if (e.target.id === "awards") {
      thisState.awards = e.target.value;
    } else if (e.target.id === "skills") {
      thisState.skills = e.target.value;
    }

    setState(thisState);
  };

  const add = (param) => {
    const thisState = { ...state };

    if (param === "edu") {
      thisState.education.push(thisState.university);
      thisState.university = {
        id: uniqid(),
        university: "",
        eduLocation: "",
        degree: "",
        graduation: "",
      };
    } else if (param === "exp") {
      thisState.experiences.push(thisState.experience);
      thisState.experience = {
        id: uniqid(),
        company: "",
        location: "",
        role: "",
        description: "",
        time: {
          from: "",
          to: "",
        },
      };
    }

    setState(thisState);
  };

  const remove = (param, key) => {
    const thisState = { ...state };
    const params = thisState[param];

    thisState[param] = params.filter((elem) => elem.id !== key);

    setState(thisState);
  };

  return (
    <main>
      <Header />
      <div className="content">
        <div className="form">
          <div>
            <div className="input-header">General Information</div>
            <General change={generalChanges} general={state.general} />
          </div>
          <div>
            <div className="input-header">Education Information</div>
            <Education
              change={eduChanges}
              university={state.university}
              add={add}
            />
          </div>
          <div>
            <div className="input-header">Experience Information</div>
            <Experience
              change={expChanges}
              experience={state.experience}
              add={add}
            />
          </div>
          <div>
            <div className="input-header">More Information</div>
            <More
              change={moreChanges}
              awards={state.awards}
              skills={state.skills}
            />
            <Preview state={state} />
          </div>
        </div>
        <div className="overview">
          <EducationOverview
            education={state.education}
            edit={editEdu}
            remove={remove}
          />
          <ExperienceOverview
            experiences={state.experiences}
            edit={editExp}
            remove={remove}
          />
          <button
            type="button"
            className="preview-button"
            onClick={() => {
              document.getElementById("preview").style.display = "block";
            }}
          >
            Preview
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
