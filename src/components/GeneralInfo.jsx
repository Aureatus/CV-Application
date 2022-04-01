import React, { Component } from "react";

function NameComponent(props) {
  const { submitted } = props;
  if (submitted === true) {
    return (
      <div className="name">
        <label htmlFor="name-input">
          Name
          <input id="name-input" type="text" />
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
      submitted: true,
    };

    this.updateState = (e) => {
      switch (e.target.id) {
        case "name-input":
          this.setState({ name: e.target.value }, () => {
            console.log(this.state);
          });
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
      e.preventDefault();
    };
  }

  render() {
    const { submitted } = this.state;
    return (
      <div className="general-info">
        <header>General Information</header>
        <main>
          <form onSubmit={this.inputToStatic} onChange={this.updateState}>
            <NameComponent submitted={submitted} />
            <div className="email">
              <label htmlFor="email-input">
                Email
                <input id="email-input" type="email" />
              </label>
            </div>
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
