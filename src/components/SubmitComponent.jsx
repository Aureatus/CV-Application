import React, { Component } from "react";

class SubmitComponent extends Component {
  render() {
    const { submitted } = this.props;
    const inputOrStatic = () => {
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
      return false;
    };

    return <div>{inputOrStatic()}</div>;
  }
}

export default SubmitComponent;
