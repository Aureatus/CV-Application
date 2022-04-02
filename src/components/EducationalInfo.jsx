import React, { Component } from "react";
import SchoolNameComponent from "./SchoolNameComponent";
import StudyTitleComponent from "./StudyTitleComponent";
import StudyDateComponent from "./StudyDateComponent";
import SubmitComponent from "./SubmitComponent";

class EducationalInfo extends Component {
  constructor() {
    super();

    this.state = {
      schoolName: "",
      studyTitle: "",
      studyDate: "",
      submitted: false,
      editActive: {
        schoolNameEditActive: false,
        studyTitleEditActive: false,
        studyDateEditActive: false,
      },
    };

    this.updateStateSchoolTitleDate = (e) => {
      if (e.target.validity.valid === false) {
        return;
      }
      switch (e.target.id) {
        case "school-name-input":
          this.setState({ schoolName: e.target.value });
          break;
        case "study-title-input":
          this.setState({ studyTitle: e.target.value });
          break;
        case "study-date-input":
          this.setState({ studyDate: e.target.value });
          break;
        default:
          break;
      }
    };

    this.schoolNameEditActiveToggle = () => {
      const { editActive } = this.state;
      const { schoolNameEditActive } = editActive;
      if (schoolNameEditActive === false) {
        this.setState({
          editActive: {
            schoolNameEditActive: true,
            studyTitleEditActive: false,
            studyDateEditActive: false,
          },
        });
      }
      if (schoolNameEditActive === true) {
        this.setState({
          editActive: {
            schoolNameEditActive: false,
            studyTitleEditActive: false,
            studyDateEditActive: false,
          },
        });
      }
    };

    this.studyTitleEditActiveToggle = () => {
      const { editActive } = this.state;
      const { studyTitleEditActive } = editActive;
      if (studyTitleEditActive === false) {
        this.setState({
          editActive: {
            schoolNameEditActive: false,
            studyTitleEditActive: true,
            studyDateEditActive: false,
          },
        });
      }
      if (studyTitleEditActive === true) {
        this.setState({
          editActive: {
            schoolNameEditActive: false,
            studyTitleEditActive: false,
            studyDateEditActive: false,
          },
        });
      }
    };

    this.studyDateEditActiveToggle = () => {
      const { editActive } = this.state;
      const { studyDateEditActive } = editActive;
      if (studyDateEditActive === false) {
        this.setState({
          editActive: {
            schoolNameEditActive: false,
            studyTitleEditActive: false,
            studyDateEditActive: true,
          },
        });
      }
      if (studyDateEditActive === true) {
        this.setState({
          editActive: {
            schoolNameEditActive: false,
            studyTitleEditActive: false,
            studyDateEditActive: false,
          },
        });
      }
    };
  }

  render() {
    const { submitted } = this.state;
    const { schoolName } = this.state;
    const { studyTitle } = this.state;
    const { studyDate } = this.state;
    const { editActive } = this.state;
    const { schoolNameEditActive } = editActive;
    const { studyTitleEditActive } = editActive;
    const { studyDateEditActive } = editActive;
    return (
      <div className="education-info">
        <header>Educational Information</header>
        <main>
          <form
            onSubmit={(e) => {
              this.setState({ submitted: true });
              e.preventDefault();
            }}
            onChange={this.updateStateSchoolTitleDate}
          >
            <SchoolNameComponent
              submitted={submitted}
              schoolName={schoolName}
              updateStateSchoolTitleDate={this.updateStateSchoolTitleDate}
              schoolNameEditActive={schoolNameEditActive}
              schoolNameEditActiveToggle={this.schoolNameEditActiveToggle}
            />
            <StudyTitleComponent
              submitted={submitted}
              studyTitle={studyTitle}
              updateStateSchoolTitleDate={this.updateStateSchoolTitleDate}
              studyTitleEditActive={studyTitleEditActive}
              studyTitleEditActiveToggle={this.studyTitleEditActiveToggle}
            />
            <StudyDateComponent
              submitted={submitted}
              studyDate={studyDate}
              updateStateSchoolTitleDate={this.updateStateSchoolTitleDate}
              studyDateEditActive={studyDateEditActive}
              studyDateEditActiveToggle={this.studyDateEditActiveToggle}
            />
            <SubmitComponent submitted={submitted} />
          </form>
        </main>
      </div>
    );
  }
}

export default EducationalInfo;
