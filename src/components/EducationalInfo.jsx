import React, { useState } from "react";
import SchoolNameComponent from "./SchoolNameComponent";
import StudyTitleComponent from "./StudyTitleComponent";
import StudyDateComponent from "./StudyDateComponent";
import SubmitComponent from "./SubmitComponent";
import "../styles/info.css";

function EducationalInfo() {
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyDate, setStudyDate] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const [schoolNameEditActive, setSchoolNameEditActive] = useState(false);
  const [studyTitleEditActive, setStudyTitleEditActive] = useState(false);
  const [studyDateEditActive, setStudyDateEditActive] = useState(false);

  const updateStateSchoolTitleDate = (e) => {
    if (e.target.validity.valid === false) {
      return;
    }
    switch (e.target.id) {
      case "school-name-input":
        setSchoolName(e.target.value);
        break;
      case "study-title-input":
        setStudyTitle(e.target.value);
        break;
      case "study-date-input":
        setStudyDate(e.target.value);
        break;
      default:
        break;
    }
  };

  const schoolNameEditActiveToggle = () => {
    if (schoolNameEditActive === false) {
      setSchoolNameEditActive(true);
      setStudyTitleEditActive(false);
      setStudyDateEditActive(false);
    }
    if (schoolNameEditActive === true) {
      setSchoolNameEditActive(false);
      setStudyTitleEditActive(false);
      setStudyDateEditActive(false);
    }
  };

  const studyTitleEditActiveToggle = () => {
    if (studyTitleEditActive === false) {
      setSchoolNameEditActive(false);
      setStudyTitleEditActive(true);
      setStudyDateEditActive(false);
    }
    if (studyTitleEditActive === true) {
      setSchoolNameEditActive(false);
      setStudyTitleEditActive(false);
      setStudyDateEditActive(false);
    }
  };

  const studyDateEditActiveToggle = () => {
    if (studyDateEditActive === false) {
      setSchoolNameEditActive(false);
      setStudyTitleEditActive(false);
      setStudyDateEditActive(true);
    }
    if (studyDateEditActive === true) {
      setSchoolNameEditActive(false);
      setStudyTitleEditActive(false);
      setStudyDateEditActive(false);
    }
  };
  return (
    <div className="education-info">
      <header>Educational Information</header>
      <main>
        <form
          onSubmit={(e) => {
            setSubmitted(true);
            e.preventDefault();
          }}
          onChange={updateStateSchoolTitleDate}
        >
          <SchoolNameComponent
            submitted={submitted}
            schoolName={schoolName}
            updateStateSchoolTitleDate={updateStateSchoolTitleDate}
            schoolNameEditActive={schoolNameEditActive}
            schoolNameEditActiveToggle={schoolNameEditActiveToggle}
          />
          <StudyTitleComponent
            submitted={submitted}
            studyTitle={studyTitle}
            updateStateSchoolTitleDate={updateStateSchoolTitleDate}
            studyTitleEditActive={studyTitleEditActive}
            studyTitleEditActiveToggle={studyTitleEditActiveToggle}
          />
          <StudyDateComponent
            submitted={submitted}
            studyDate={studyDate}
            updateStateSchoolTitleDate={updateStateSchoolTitleDate}
            studyDateEditActive={studyDateEditActive}
            studyDateEditActiveToggle={studyDateEditActiveToggle}
          />
          <SubmitComponent submitted={submitted} />
        </form>
      </main>
    </div>
  );
}

export default EducationalInfo;
