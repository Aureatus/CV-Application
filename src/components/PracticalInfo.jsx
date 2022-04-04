import React, { Component } from "react";

import CompanyNameComponent from "./CompanyNameComponent";
import PositionTitleComponent from "./PositionTitleComponent";
import MainJobTasksComponent from "./MainJobTasksComponent";
import CompanyStartDateComponent from "./CompanyStartDateComponent";
import CompanyEndDateComponent from "./CompanyEndDateComponent";

import SubmitComponent from "./SubmitComponent";
import "../styles/info.css";

class PracticalInfo extends Component {
  constructor() {
    super();

    this.state = {
      companyName: "",
      positionTitle: "",
      mainJobTasks: "",
      companyStartDate: "",
      companyEndDate: "",
      submitted: false,
      editActive: {
        companyNameEditActive: false,
        positionTitleEditActive: false,
        mainJobTasksEditActive: false,
        companyStartDateEditActive: false,
        companyEndDateEditActive: false,
      },
    };

    this.updateStateNameTitleTasksDate = (e) => {
      if (e.target.validity.valid === false) {
        return;
      }
      switch (e.target.id) {
        case "company-name-input":
          this.setState({ companyName: e.target.value });
          break;
        case "position-title-input":
          this.setState({ positionTitle: e.target.value });
          break;
        case "main-job-tasks-input":
          this.setState({ mainJobTasks: e.target.value });
          break;
        case "company-start-date-input":
          this.setState({ companyStartDate: e.target.value });
          break;
        case "company-end-date-input":
          this.setState({ companyEndDate: e.target.value });
          break;
        default:
          break;
      }
    };

    this.companyNameEditActiveToggle = () => {
      const { editActive } = this.state;
      const { companyNameEditActive } = editActive;
      if (companyNameEditActive === false) {
        this.setState({
          editActive: {
            companyNameEditActive: true,
            positionTitleEditActive: false,
            mainJobTasksEditActive: false,
            companyStartDateEditActive: false,
            companyEndDateEditActive: false,
          },
        });
      }
      if (companyNameEditActive === true) {
        this.setState({
          editActive: {
            companyNameEditActive: false,
            positionTitleEditActive: false,
            mainJobTasksEditActive: false,
            companyStartDateEditActive: false,
            companyEndDateEditActive: false,
          },
        });
      }
    };

    this.positionTitleEditActiveToggle = () => {
      const { editActive } = this.state;
      const { positionTitleEditActive } = editActive;
      if (positionTitleEditActive === false) {
        this.setState({
          editActive: {
            companyNameEditActive: false,
            positionTitleEditActive: true,
            mainJobTasksEditActive: false,
            companyStartDateEditActive: false,
            companyEndDateEditActive: false,
          },
        });
      }
      if (positionTitleEditActive === true) {
        this.setState({
          editActive: {
            companyNameEditActive: false,
            positionTitleEditActive: false,
            mainJobTasksEditActive: false,
            companyStartDateEditActive: false,
            companyEndDateEditActive: false,
          },
        });
      }
    };

    this.mainJobTasksEditActiveToggle = () => {
      const { editActive } = this.state;
      const { mainJobTasksEditActive } = editActive;
      if (mainJobTasksEditActive === false) {
        this.setState({
          editActive: {
            companyNameEditActive: false,
            positionTitleEditActive: false,
            mainJobTasksEditActive: true,
            companyStartDateEditActive: false,
            companyEndDateEditActive: false,
          },
        });
      }
      if (mainJobTasksEditActive === true) {
        this.setState({
          editActive: {
            companyNameEditActive: false,
            positionTitleEditActive: false,
            mainJobTasksEditActive: false,
            companyStartDateEditActive: false,
            companyEndDateEditActive: false,
          },
        });
      }
    };
    this.companyStartDateEditActiveToggle = () => {
      const { editActive } = this.state;
      const { companyStartDateEditActive } = editActive;
      if (companyStartDateEditActive === false) {
        this.setState({
          editActive: {
            companyNameEditActive: false,
            positionTitleEditActive: false,
            mainJobTasksEditActive: false,
            companyStartDateEditActive: true,
            companyEndDateEditActive: false,
          },
        });
      }
      if (companyStartDateEditActive === true) {
        this.setState({
          editActive: {
            companyNameEditActive: false,
            positionTitleEditActive: false,
            mainJobTasksEditActive: false,
            companyStartDateEditActive: false,
            companyEndDateEditActive: false,
          },
        });
      }
    };
    this.companyEndDateEditActiveToggle = () => {
      const { editActive } = this.state;
      const { companyEndDateEditActive } = editActive;
      if (companyEndDateEditActive === false) {
        this.setState({
          editActive: {
            companyNameEditActive: false,
            positionTitleEditActive: false,
            mainJobTasksEditActive: false,
            companyStartDateEditActive: false,
            companyEndDateEditActive: true,
          },
        });
      }
      if (companyEndDateEditActive === true) {
        this.setState({
          editActive: {
            companyNameEditActive: false,
            positionTitleEditActive: false,
            mainJobTasksEditActive: false,
            companyStartDateEditActive: false,
            companyEndDateEditActive: false,
          },
        });
      }
    };
  }

  render() {
    const { submitted } = this.state;
    const { companyName } = this.state;
    const { positionTitle } = this.state;
    const { mainJobTasks } = this.state;
    const { companyStartDate } = this.state;
    const { companyEndDate } = this.state;
    const { editActive } = this.state;
    const { companyNameEditActive } = editActive;
    const { positionTitleEditActive } = editActive;
    const { mainJobTasksEditActive } = editActive;
    const { companyStartDateEditActive } = editActive;
    const { companyEndDateEditActive } = editActive;
    return (
      <div className="practical-info">
        <header>Practical Information</header>
        <main>
          <form
            onSubmit={(e) => {
              this.setState({ submitted: true });
              e.preventDefault();
            }}
            onChange={this.updateStateNameTitleTasksDate}
          >
            <CompanyNameComponent
              submitted={submitted}
              companyName={companyName}
              updateStateNameTitleTasksDate={this.updateStateNameTitleTasksDate}
              companyNameEditActive={companyNameEditActive}
              companyNameEditActiveToggle={this.companyNameEditActiveToggle}
            />
            <PositionTitleComponent
              submitted={submitted}
              positionTitle={positionTitle}
              updateStateNameTitleTasksDate={this.updateStateNameTitleTasksDate}
              positionTitleEditActive={positionTitleEditActive}
              positionTitleEditActiveToggle={this.positionTitleEditActiveToggle}
            />
            <MainJobTasksComponent
              submitted={submitted}
              mainJobTasks={mainJobTasks}
              updateStateNameTitleTasksDate={this.updateStateNameTitleTasksDate}
              mainJobTasksEditActive={mainJobTasksEditActive}
              mainJobTasksEditActiveToggle={this.mainJobTasksEditActiveToggle}
            />
            <CompanyStartDateComponent
              submitted={submitted}
              companyStartDate={companyStartDate}
              updateStateNameTitleTasksDate={this.updateStateNameTitleTasksDate}
              companyStartDateEditActive={companyStartDateEditActive}
              companyStartDateEditActiveToggle={
                this.companyStartDateEditActiveToggle
              }
            />
            <CompanyEndDateComponent
              submitted={submitted}
              companyEndDate={companyEndDate}
              updateStateNameTitleTasksDate={this.updateStateNameTitleTasksDate}
              companyEndDateEditActive={companyEndDateEditActive}
              companyEndDateEditActiveToggle={
                this.companyEndDateEditActiveToggle
              }
            />
            <SubmitComponent submitted={submitted} />
          </form>
        </main>
      </div>
    );
  }
}

export default PracticalInfo;
