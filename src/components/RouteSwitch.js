import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import uniqid from "uniqid";
import App from "../App";
import Preview from "./Preview";

function RouteSwitch() {
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

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/react-gh-pages"
          element={<App state={state} setState={setState} />}
        />
        <Route
          path="/react-gh-pages/preview"
          element={<Preview state={state} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
