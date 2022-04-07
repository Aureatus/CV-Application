import React from "react";

function MainJobTasksComponent(props) {
  const { submitted } = props;
  const { mainJobTasks } = props;
  const { updateStateNameTitleTasksDate } = props;
  const { mainJobTasksEditActive } = props;
  const { mainJobTasksEditActiveToggle } = props;
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

export default MainJobTasksComponent;
