import React, { Component } from "react";

class MainJobTasksComponent extends Component {
  render() {
    const { submitted } = this.props;
    const { mainJobTasks } = this.props;
    const { updateStateNameTitleTasksDate } = this.props;
    const { mainJobTasksEditActive } = this.props;
    const { mainJobTasksEditActiveToggle } = this.props;
    const inputOrStatic = () => {
      if (submitted === false) {
        return (
          <div className="main-job-tasks">
            <label htmlFor="main-job-tasks-input">
              Main Job Tasks
              <input id="main-job-tasks-input" type="text" />
            </label>
          </div>
        );
      }

      if (submitted === true) {
        if (mainJobTasksEditActive === false) {
          return (
            <div className="main-job-tasks">
              <label htmlFor="main-job-tasks-input">
                Main Job Tasks
                <p>{mainJobTasks}</p>
                <button type="button" onClick={mainJobTasksEditActiveToggle}>
                  Edit
                </button>
              </label>
            </div>
          );
        }
        if (mainJobTasksEditActive === true) {
          return (
            <div className="main-job-tasks">
              <label htmlFor="main-job-tasks-input">
                Main Job Tasks
                <input
                  id="main-job-tasks-input"
                  type="text"
                  defaultValue={mainJobTasks}
                />
                <button
                  type="button"
                  onClick={(e) => {
                    mainJobTasksEditActiveToggle();
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

export default MainJobTasksComponent;
