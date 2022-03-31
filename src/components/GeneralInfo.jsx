import React, { Component } from "react";

class GeneralInfo extends Component {
  render() {
    return (
      <div className="general-info">
        <header>General Information</header>
        <main>
          <form>
            <div className="name">
              <label htmlFor="name-input">
                Name
                <input id="name-input" type="text" />
              </label>
            </div>
            <div className="email">
              <label htmlFor="email-input">
                Email
                <input id="email-input" type="email" />
              </label>
            </div>
            <div className="phone-number">
              <label htmlFor="phone-number-input">
                Phone Number
                <input id="phone-number-input" type="tel" />
              </label>
            </div>
            <div className="submit">
              <label htmlFor="submit">
                <input id="submit" type="submit" />
              </label>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default GeneralInfo;
