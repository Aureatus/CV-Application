import React, { Component } from "react";

class StudyTitleComponent extends Component {
  render() {
    const { submitted } = this.props;
    const { studyTitle } = this.props;
    const { updateStateSchoolTitleDate } = this.props;
    const { studyTitleEditActive } = this.props;
    const { studyTitleEditActiveToggle } = this.props;
    const inputOrStatic = () => {
      if (submitted === false) {
        return (
          <div className="study-title">
            <label htmlFor="study-title-input">
              Study Title
              <input id="study-title-input" type="text" />
            </label>
          </div>
        );
      }

      if (submitted === true) {
        if (studyTitleEditActive === false) {
          return (
            <div className="study-title">
              <label htmlFor="study-title-input">
                Study Title
                <p>{studyTitle}</p>
                <button type="button" onClick={studyTitleEditActiveToggle}>
                  Edit
                </button>
              </label>
            </div>
          );
        }
        if (studyTitleEditActive === true) {
          return (
            <div className="study-title">
              <label htmlFor="study-title-input">
                Study Title
                <input
                  id="study-title-input"
                  type="text"
                  defaultValue={studyTitle}
                />
                <button
                  type="button"
                  onClick={(e) => {
                    studyTitleEditActiveToggle();
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
}

export default StudyTitleComponent;
