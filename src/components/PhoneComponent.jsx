import React, { Component } from "react";

class PhoneComponent extends Component {
  render() {
    const { submitted } = this.props;
    const { phone } = this.props;
    const { updateStateNameEmailPhone } = this.props;
    const { phoneEditActive } = this.props;
    const { phoneEditActiveToggle } = this.props;
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
        if (phoneEditActive === false) {
          return (
            <div className="phone">
              <label htmlFor="phone-input">
                Phone Number
                <p>{phone}</p>
                <button type="button" onClick={phoneEditActiveToggle}>
                  Edit
                </button>
              </label>
            </div>
          );
        }
        if (phoneEditActive === true) {
          return (
            <div className="phone">
              <label htmlFor="phone-number-input">
                Phone Number
                <input
                  id="phone-number-input"
                  type="phone"
                  defaultValue={phone}
                  required
                />
                <button
                  type="button"
                  onClick={(e) => {
                    const phoneInput = e.target.parentElement.children[0];
                    if (phoneInput.validity.valid) {
                      phoneEditActiveToggle();
                      updateStateNameEmailPhone(e);
                    }
                  }}
                >
                  Submit
                </button>
              </label>
            </div>
          );
        }
      }
      return false;
    };
    return <div>{inputOrStatic()}</div>;
  }
}

export default PhoneComponent;
