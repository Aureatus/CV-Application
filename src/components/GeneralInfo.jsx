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
    };

    this.updateState = (e) => {
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
  }

  render() {
    const { submitted } = this.state;
    const { name } = this.state;
    const { email } = this.state;
    const { phone } = this.state;
    return (
      <div className="general-info">
        <header>General Information</header>
        <main>
          <form
            onSubmit={(e) => {
              this.setState({ submitted: true });
              e.preventDefault();
            }}
            onChange={this.updateState}
          >
            <NameComponent submitted={submitted} name={name} />
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
