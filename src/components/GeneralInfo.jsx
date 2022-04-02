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
      },
    };

    this.updateStateNameEmailPhone = (e) => {
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
          },
        });
      }
      if (nameEditActive === true) {
        this.setState({
          editActive: {
            nameEditActive: false,
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
            <EmailComponent submitted={submitted} email={email} />
            <PhoneComponent submitted={submitted} phone={phone} />
            <SubmitComponent submitted={submitted} />
          </form>
        </main>
      </div>
    );
  }
}

export default GeneralInfo;
