import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationalInfo from "./components/EducationalInfo";
import PracticalInfo from "./components/PracticalInfo";

import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <GeneralInfo />
        <hr />
        <EducationalInfo />
        <hr />
        <PracticalInfo />
      </div>
    );
  }
}

export default App;
