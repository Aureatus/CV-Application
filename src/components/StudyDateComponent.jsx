import React from "react";

function StudyDateComponent(props) {
  const { submitted } = props;
  const { studyDate } = props;
  const { updateStateSchoolTitleDate } = props;
  const { studyDateEditActive } = props;
  const { studyDateEditActiveToggle } = props;
  const inputOrStatic = () => {
    if (submitted === false) {
      return (
        <div className="study-date">
          <label htmlFor="study-date-input">
            Study Date
            <input id="study-date-input" type="date" />
          </label>
        </div>
      );
    }

    if (submitted === true) {
      if (studyDateEditActive === false) {
        return (
          <div className="study-date">
            <label htmlFor="study-date-input">
              Study Date
              <p>{studyDate}</p>
              <button type="button" onClick={studyDateEditActiveToggle}>
                Edit
              </button>
            </label>
          </div>
        );
      }
      if (studyDateEditActive === true) {
        return (
          <div className="study-date">
            <label htmlFor="study-date-input">
              Study Date
              <input
                id="study-date-input"
                type="date"
                defaultValue={studyDate}
              />
              <button
                type="button"
                onClick={(e) => {
                  studyDateEditActiveToggle();
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

export default StudyDateComponent;
