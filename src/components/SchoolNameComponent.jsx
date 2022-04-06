import React from "react";

function SchoolNameComponent(props) {
  const { submitted } = props;
  const { schoolName } = props;
  const { updateStateSchoolTitleDate } = props;
  const { schoolNameEditActive } = props;
  const { schoolNameEditActiveToggle } = props;
  const inputOrStatic = () => {
    if (submitted === false) {
      return (
        <div className="school-name">
          <label htmlFor="school-name-input">
            School Name
            <input id="school-name-input" type="text" />
          </label>
        </div>
      );
    }

    if (submitted === true) {
      if (schoolNameEditActive === false) {
        return (
          <div className="school-name">
            <label htmlFor="school-name-input">
              School Name
              <p>{schoolName}</p>
              <button type="button" onClick={schoolNameEditActiveToggle}>
                Edit
              </button>
            </label>
          </div>
        );
      }
      if (schoolNameEditActive === true) {
        return (
          <div className="school-name">
            <label htmlFor="school-name-input">
              School Name
              <input
                id="school-name-input"
                type="text"
                defaultValue={schoolName}
              />
              <button
                type="button"
                onClick={(e) => {
                  schoolNameEditActiveToggle();
                  updateStateSchoolTitleDate(e);
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

export default SchoolNameComponent;
