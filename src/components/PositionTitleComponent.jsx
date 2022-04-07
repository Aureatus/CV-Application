import React from "react";

function PositionTitleComponent(props) {
  const { submitted } = props;
  const { positionTitle } = props;
  const { updateStateNameTitleTasksDate } = props;
  const { positionTitleEditActive } = props;
  const { positionTitleEditActiveToggle } = props;
  const inputOrStatic = () => {
    if (submitted === false) {
      return (
        <div className="position-title">
          <label htmlFor="position-title-input">
            Position Title
            <input id="position-title-input" type="text" />
          </label>
        </div>
      );
    }

    if (submitted === true) {
      if (positionTitleEditActive === false) {
        return (
          <div className="position-title">
            <label htmlFor="position-title-input">
              Position Title
              <p>{positionTitle}</p>
              <button type="button" onClick={positionTitleEditActiveToggle}>
                Edit
              </button>
            </label>
          </div>
        );
      }
      if (positionTitleEditActive === true) {
        return (
          <div className="position-title">
            <label htmlFor="position-title-input">
              Position Title
              <input
                id="position-title-input"
                type="text"
                defaultValue={positionTitle}
              />
              <button
                type="button"
                onClick={(e) => {
                  positionTitleEditActiveToggle();
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

export default PositionTitleComponent;
