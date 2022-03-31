import React, { Component } from "react";

class GeneralInfo extends Component {
  render() {
    return (
      <div>
        <header>General Information</header>
        <main>
          <div className="name">
            <label htmlFor="name-input">
              <input id="name-input" type="text" />
            </label>
          </div>
        </main>
      </div>
    );
  }
}

export default GeneralInfo;
