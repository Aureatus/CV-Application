import React, { Component } from "react";

class NameComponent extends Component {
  render() {
    const { submitted } = this.props;
    const { name } = this.props;
    const inputOrStatic = () => {
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
              <button type="button">Edit</button>
            </label>
          </div>
        );
      }
      return false;
    };

    return <div>{inputOrStatic()}</div>;
  }
}

export default NameComponent;
