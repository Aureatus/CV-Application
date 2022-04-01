import React, { Component } from "react";

class EmailComponent extends Component {
  render() {
    const { submitted } = this.props;
    const { email } = this.props;
    const inputOrStatic = () => {
      if (submitted === false) {
        return (
          <div className="email">
            <label htmlFor="email-input">
              Email
              <input id="email-input" type="email" />
            </label>
          </div>
        );
      }
      if (submitted === true) {
        return (
          <div className="email">
            <label htmlFor="email-input">
              Email
              <p>{email}</p>
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

export default EmailComponent;
