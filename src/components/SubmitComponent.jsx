import React from "react";

function SubmitComponent(props) {
  const { submitted } = props;
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

export default SubmitComponent;
