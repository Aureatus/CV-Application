import React from "react";

function EmailComponent(props) {
  const { submitted } = props;
  const { email } = props;
  const { updateStateNameEmailPhone } = props;
  const { emailEditActive } = props;
  const { emailEditActiveToggle } = props;
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
      if (emailEditActive === false) {
        return (
          <div className="email">
            <label htmlFor="email-input">
              Email
              <p>{email}</p>
              <button type="button" onClick={emailEditActiveToggle}>
                Edit
              </button>
            </label>
          </div>
        );
      }
      if (emailEditActive === true) {
        return (
          <div className="email">
            <label htmlFor="email-input">
              Email
              <input
                id="email-input"
                type="email"
                defaultValue={email}
                required
              />
              <button
                type="button"
                onClick={(e) => {
                  const emailInput = e.target.parentElement.children[0];
                  if (emailInput.validity.valid) {
                    emailEditActiveToggle();
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

export default EmailComponent;
