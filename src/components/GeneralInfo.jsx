import React, { Component } from "react";
import NameComponent from "./NameComponent";
import EmailComponent from "./EmailComponent";

function PhoneComponent(props) {
  const { submitted } = props;
  const { phone } = props;

  if (submitted === false) {
    return (
      <div className="phone-number">
        <label htmlFor="phone-number-input">
          Phone Number
          <input id="phone-number-input" type="tel" />
        </label>
      </div>
    );
  }

  if (submitted === true) {
    return (
      <div className="phone-number">
        <label htmlFor="phone-number-input">
          Phone Number
          <p>{phone}</p>
          <button type="button">Edit</button>
        </label>
      </div>
    );
  }
}

function SubmitComponent(props) {
  const { submitted } = props;

  if (submitted === false) {
    return (
      <div className="submit">
        <label htmlFor="submit">
          <input id="submit" type="submit" />
        </label>
      </div>
    );
  }
  if (submitted === true) {
    return <div />;
  }
}

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
