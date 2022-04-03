import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationalInfo from "./components/EducationalInfo";
import PracticalInfo from "./components/PracticalInfo";

class App extends Component {
  render() {
    return (
      <div>
        <GeneralInfo />
        <EducationalInfo />
        <PracticalInfo />
      </div>
    );
  }
}

export default App;
