import React, { useState } from "react";

import CompanyNameComponent from "./CompanyNameComponent";
import PositionTitleComponent from "./PositionTitleComponent";
import MainJobTasksComponent from "./MainJobTasksComponent";
import CompanyStartDateComponent from "./CompanyStartDateComponent";
import CompanyEndDateComponent from "./CompanyEndDateComponent";

import SubmitComponent from "./SubmitComponent";
import "../styles/info.css";

function PracticalInfo() {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainJobTasks, setMainJobTasks] = useState("");
  const [companyStartDate, setCompanyStartDate] = useState("");
  const [companyEndDate, setCompanyEndDate] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const [companyNameEditActive, setCompanyNameEditActive] = useState(false);
  const [mainJobTasksEditActive, setMainJobTasksEditActive] = useState(false);
  const [positionTitleEditActive, setPositionTitleEditActive] = useState(false);

  const [companyStartDateEditActive, setCompanyStartDateEditActive] =
    useState(false);
  const [companyEndDateEditActive, setCompanyEndDateEditActive] =
    useState(false);

  const updateStateNameTitleTasksDate = (e) => {
    if (e.target.validity.valid === false) {
      return;
    }
    switch (e.target.id) {
      case "company-name-input":
        setCompanyName(e.target.value);
        break;
      case "position-title-input":
        setPositionTitle(e.target.value);
        break;
      case "main-job-tasks-input":
        setMainJobTasks(e.target.value);
        break;
      case "company-start-date-input":
        setCompanyStartDate(e.target.value);
        break;
      case "company-end-date-input":
        setCompanyEndDate(e.target.value);
        break;
      default:
        break;
    }
  };

  const companyNameEditActiveToggle = () => {
    if (companyNameEditActive === false) {
      setCompanyNameEditActive(true);
      setPositionTitleEditActive(false);
      setMainJobTasksEditActive(false);
      setCompanyStartDateEditActive(false);
      setCompanyEndDateEditActive(false);
    }
    if (companyNameEditActive === true) {
      setCompanyNameEditActive(false);
      setPositionTitleEditActive(false);
      setMainJobTasksEditActive(false);
      setCompanyStartDateEditActive(false);
      setCompanyEndDateEditActive(false);
    }
  };

  const positionTitleEditActiveToggle = () => {
    if (positionTitleEditActive === false) {
      setCompanyNameEditActive(false);
      setPositionTitleEditActive(true);
      setMainJobTasksEditActive(false);
      setCompanyStartDateEditActive(false);
      setCompanyEndDateEditActive(false);
    }
    if (positionTitleEditActive === true) {
      setCompanyNameEditActive(false);
      setPositionTitleEditActive(false);
      setMainJobTasksEditActive(false);
      setCompanyStartDateEditActive(false);
      setCompanyEndDateEditActive(false);
    }
  };

  const mainJobTasksEditActiveToggle = () => {
    if (mainJobTasksEditActive === false) {
      setCompanyNameEditActive(false);
      setPositionTitleEditActive(false);
      setMainJobTasksEditActive(true);
      setCompanyStartDateEditActive(false);
      setCompanyEndDateEditActive(false);
    }
    if (mainJobTasksEditActive === true) {
      setCompanyNameEditActive(false);
      setPositionTitleEditActive(false);
      setMainJobTasksEditActive(false);
      setCompanyStartDateEditActive(false);
      setCompanyEndDateEditActive(false);
    }
  };
  const companyStartDateEditActiveToggle = () => {
    if (companyStartDateEditActive === false) {
      setCompanyNameEditActive(false);
      setPositionTitleEditActive(false);
      setMainJobTasksEditActive(false);
      setCompanyStartDateEditActive(true);
      setCompanyEndDateEditActive(false);
    }
    if (companyStartDateEditActive === true) {
      setCompanyNameEditActive(false);
      setPositionTitleEditActive(false);
      setMainJobTasksEditActive(false);
      setCompanyStartDateEditActive(false);
      setCompanyEndDateEditActive(false);
    }
  };
  const companyEndDateEditActiveToggle = () => {
    if (companyEndDateEditActive === false) {
      setCompanyNameEditActive(false);
      setPositionTitleEditActive(false);
      setMainJobTasksEditActive(false);
      setCompanyStartDateEditActive(false);
      setCompanyEndDateEditActive(true);
    }
    if (companyEndDateEditActive === true) {
      setCompanyNameEditActive(false);
      setPositionTitleEditActive(false);
      setMainJobTasksEditActive(false);
      setCompanyStartDateEditActive(false);
      setCompanyEndDateEditActive(false);
    }
  };

  return (
    <div className="practical-info">
      <header>Practical Information</header>
      <main>
        <form
          onSubmit={(e) => {
            setSubmitted(true);
            e.preventDefault();
          }}
          onChange={updateStateNameTitleTasksDate}
        >
          <CompanyNameComponent
            submitted={submitted}
            companyName={companyName}
            updateStateNameTitleTasksDate={updateStateNameTitleTasksDate}
            companyNameEditActive={companyNameEditActive}
            companyNameEditActiveToggle={companyNameEditActiveToggle}
          />
          <PositionTitleComponent
            submitted={submitted}
            positionTitle={positionTitle}
            updateStateNameTitleTasksDate={updateStateNameTitleTasksDate}
            positionTitleEditActive={positionTitleEditActive}
            positionTitleEditActiveToggle={positionTitleEditActiveToggle}
          />
          <MainJobTasksComponent
            submitted={submitted}
            mainJobTasks={mainJobTasks}
            updateStateNameTitleTasksDate={updateStateNameTitleTasksDate}
            mainJobTasksEditActive={mainJobTasksEditActive}
            mainJobTasksEditActiveToggle={mainJobTasksEditActiveToggle}
          />
          <CompanyStartDateComponent
            submitted={submitted}
            companyStartDate={companyStartDate}
            updateStateNameTitleTasksDate={updateStateNameTitleTasksDate}
            companyStartDateEditActive={companyStartDateEditActive}
            companyStartDateEditActiveToggle={companyStartDateEditActiveToggle}
          />
          <CompanyEndDateComponent
            submitted={submitted}
            companyEndDate={companyEndDate}
            updateStateNameTitleTasksDate={updateStateNameTitleTasksDate}
            companyEndDateEditActive={companyEndDateEditActive}
            companyEndDateEditActiveToggle={companyEndDateEditActiveToggle}
          />
          <SubmitComponent submitted={submitted} />
        </form>
      </main>
    </div>
  );
}

export default PracticalInfo;
