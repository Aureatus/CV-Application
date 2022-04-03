import React, { Component } from "react";

class CompanyEndDateComponent extends Component {
  render() {
    const { submitted } = this.props;
    const { companyEndDate } = this.props;
    const { updateStateNameTitleTasksDate } = this.props;
    const { companyEndDateEditActive } = this.props;
    const { companyEndDateEditActiveToggle } = this.props;
    const inputOrStatic = () => {
      if (submitted === false) {
        return (
          <div className="company-end-date">
            <label htmlFor="company-end-date-input">
              Company End Date
              <input id="company-end-date-input" type="date" />
            </label>
          </div>
        );
      }

      if (submitted === true) {
        if (companyEndDateEditActive === false) {
          return (
            <div className="company-end-date">
              <label htmlFor="company-end-date-input">
                Company End Date
                <p>{companyEndDate}</p>
                <button type="button" onClick={companyEndDateEditActiveToggle}>
                  Edit
                </button>
              </label>
            </div>
          );
        }
        if (companyEndDateEditActive === true) {
          return (
            <div className="company-end-date">
              <label htmlFor="company-end-date-input">
                Company End Date
                <input
                  id="company-end-date-input"
                  type="date"
                  defaultValue={companyEndDate}
                />
                <button
                  type="button"
                  onClick={(e) => {
                    companyEndDateEditActiveToggle();
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

export default CompanyEndDateComponent;
