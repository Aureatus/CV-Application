import React, { Component } from "react";

class PhoneComponent extends Component {
  render() {
    const { submitted } = this.props;
    const { phone } = this.props;
    const inputOrStatic = () => {
      if (submitted === false) {
        return (
          <div className="phone-number">
            <label htmlFor="phone-number-input">
              Phone Number
              <input id="phone-number-input" type="tel" />
            </label>
          </div>
        );
      }

      if (submitted === true) {
        return (
          <div className="phone-number">
            <label htmlFor="phone-number-input">
              Phone Number
              <p>{phone}</p>
              <button type="button">Edit</button>
            </label>
          </div>
        );
      }
      return false;
    };
    return <div>{inputOrStatic()}</div>;
  }
}

export default PhoneComponent;
