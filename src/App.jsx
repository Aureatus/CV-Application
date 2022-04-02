import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationalInfo from "./components/EducationalInfo";

class App extends Component {
  render() {
    return (
      <div>
        <GeneralInfo />
        <EducationalInfo />
      </div>
    );
  }
}

export default App;
