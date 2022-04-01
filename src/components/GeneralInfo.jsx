import React, { Component } from "react";

function NameComponent(props) {
  const { submitted } = props;
  const { name } = props;
  if (submitted === false) {
    return (
      <div className="name">
        <label htmlFor="name-input">
          Name
          <input id="name-input" type="text" />
        </label>
      </div>
    );
  }
  if (submitted === true) {
    return (
      <div className="name">
        <label htmlFor="name-input">
          Name
          <p>{name}</p>
        </label>
      </div>
    );
  }
}

function EmailComponent(props) {
  const { submitted } = props;
  const { email } = props;
  if (submitted === false) {
    return (
      <div className="email">
        <label htmlFor="email-input">
          Email
          <input id="email-input" type="email" />
        </label>
      </div>
    );
  }
  if (submitted === true) {
    return (
      <div className="email">
        <label htmlFor="email-input">
          Email
          <p>{email}</p>
        </label>
      </div>
    );
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
          this.setState({ name: e.target.value }, () => {});
          break;
        case "email-input":
          this.setState({ email: e.target.value }, () => {
            console.log(this.state);
          });
          break;
        case "phone-number-input":
          this.setState({ phone: e.target.value }, () => {
            console.log(this.state);
          });
          break;
        default:
          break;
      }
    };

    this.inputToStatic = (e) => {
      this.setState({ submitted: true });
      e.preventDefault();
    };
  }

  render() {
    const { submitted } = this.state;
    const { name } = this.state;
    const { email } = this.state;
    return (
      <div className="general-info">
        <header>General Information</header>
        <main>
          <form onSubmit={this.inputToStatic} onChange={this.updateState}>
            <NameComponent submitted={submitted} name={name} />
            <EmailComponent submitted={submitted} email={email} />
            <div className="phone-number">
              <label htmlFor="phone-number-input">
                Phone Number
                <input id="phone-number-input" type="tel" />
              </label>
            </div>
            <div className="submit">
              <label htmlFor="submit">
                <input id="submit" type="submit" />
              </label>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default GeneralInfo;
