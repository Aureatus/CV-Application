import React, { Component } from "react";
import NameComponent from "./NameComponent";
import EmailComponent from "./EmailComponent";
import PhoneComponent from "./PhoneComponent";
import SubmitComponent from "./SubmitComponent";

class GeneralInfo extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      submitted: false,
      editActive: {
        nameEditActive: false,
        emailEditActive: false,
      },
    };

    this.updateStateNameEmailPhone = (e) => {
      if (e.target.validity.valid === false) {
        return;
      }
      switch (e.target.id) {
        case "name-input":
          this.setState({ name: e.target.value });
          break;
        case "email-input":
          this.setState({ email: e.target.value });
          break;
        case "phone-number-input":
          this.setState({ phone: e.target.value });
          break;
        default:
          break;
      }
    };

    this.nameEditActiveToggle = () => {
      const { editActive } = this.state;
      const { nameEditActive } = editActive;
      if (nameEditActive === false) {
        this.setState({
          editActive: {
            nameEditActive: true,
            emailEditActive: false,
          },
        });
      }
      if (nameEditActive === true) {
        this.setState({
          editActive: {
            nameEditActive: false,
            emailEditActive: false,
          },
        });
      }
    };

    this.emailEditActiveToggle = () => {
      const { editActive } = this.state;
      const { emailEditActive } = editActive;
      if (emailEditActive === false) {
        this.setState({
          editActive: {
            nameEditActive: false,
            emailEditActive: true,
          },
        });
      }
      if (emailEditActive === true) {
        this.setState({
          editActive: {
            nameEditActive: false,
            emailEditActive: false,
          },
        });
      }
    };
  }

  render() {
    const { submitted } = this.state;
    const { name } = this.state;
    const { email } = this.state;
    const { phone } = this.state;
    const { editActive } = this.state;
    const { nameEditActive } = editActive;
    const { emailEditActive } = editActive;
    return (
      <div className="general-info">
        <header>General Information</header>
        <main>
          <form
            onSubmit={(e) => {
              this.setState({ submitted: true });
              e.preventDefault();
            }}
            onChange={this.updateStateNameEmailPhone}
          >
            <NameComponent
              submitted={submitted}
              name={name}
              updateStateNameEmailPhone={this.updateStateNameEmailPhone}
              nameEditActive={nameEditActive}
              nameEditActiveToggle={this.nameEditActiveToggle}
            />
            <EmailComponent
              submitted={submitted}
              email={email}
              updateStateNameEmailPhone={this.updateStateNameEmailPhone}
              emailEditActive={emailEditActive}
              emailEditActiveToggle={this.emailEditActiveToggle}
            />
            <PhoneComponent submitted={submitted} phone={phone} />
            <SubmitComponent submitted={submitted} />
          </form>
        </main>
      </div>
    );
  }
}

export default GeneralInfo;
