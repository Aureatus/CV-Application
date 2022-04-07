import React from "react";

function CompanyNameComponent(props) {
  const { submitted } = props;
  const { companyName } = props;
  const { updateStateNameTitleTasksDate } = props;
  const { companyNameEditActive } = props;
  const { companyNameEditActiveToggle } = props;
  const inputOrStatic = () => {
    if (submitted === false) {
      return (
        <div className="company-name">
          <label htmlFor="company-name-input">
            Company Name
            <input id="company-name-input" type="text" />
          </label>
        </div>
      );
    }

    if (submitted === true) {
      if (companyNameEditActive === false) {
        return (
          <div className="company-name">
            <label htmlFor="company-name-input">
              Company Name
              <p>{companyName}</p>
              <button type="button" onClick={companyNameEditActiveToggle}>
                Edit
              </button>
            </label>
          </div>
        );
      }
      if (companyNameEditActive === true) {
        return (
          <div className="company-name">
            <label htmlFor="company-name-input">
              Company Name
              <input
                id="company-name-input"
                type="text"
                defaultValue={companyName}
              />
              <button
                type="button"
                onClick={(e) => {
                  companyNameEditActiveToggle();
                  updateStateNameTitleTasksDate(e);
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

export default CompanyNameComponent;
