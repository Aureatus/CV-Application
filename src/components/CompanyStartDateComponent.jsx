import React, { Component } from "react";

class CompanyStartDateComponent extends Component {
  render() {
    const { submitted } = this.props;
    const { companyStartDate } = this.props;
    const { updateStateNameTitleTasksDate } = this.props;
    const { companyStartDateEditActive } = this.props;
    const { companyStartDateEditActiveToggle } = this.props;
    const inputOrStatic = () => {
      if (submitted === false) {
        return (
          <div className="company-start-date">
            <label htmlFor="company-start-date-input">
              Company Start Date
              <input id="company-start-date-input" type="date" />
            </label>
          </div>
        );
      }

      if (submitted === true) {
        if (companyStartDateEditActive === false) {
          return (
            <div className="company-start-date">
              <label htmlFor="company-start-date-input">
                Company Start Date
                <p>{companyStartDate}</p>
                <button
                  type="button"
                  onClick={companyStartDateEditActiveToggle}
                >
                  Edit
                </button>
              </label>
            </div>
          );
        }
        if (companyStartDateEditActive === true) {
          return (
            <div className="company-start-date">
              <label htmlFor="company-start-date-input">
                Company Start Date
                <input
                  id="company-start-date-input"
                  type="date"
                  defaultValue={companyStartDate}
                />
                <button
                  type="button"
                  onClick={(e) => {
                    companyStartDateEditActiveToggle();
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
}

export default CompanyStartDateComponent;
