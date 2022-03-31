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
          <div className="email">
            <label htmlFor="email-input">
              <input id="email-input" type="email" />
            </label>
          </div>
        </main>
      </div>
    );
  }
}

export default GeneralInfo;
