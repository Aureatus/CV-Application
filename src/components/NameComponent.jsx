import React from "react";

function NameComponent(props) {
  const { submitted } = props;
  const { name } = props;
  const { updateStateNameEmailPhone } = props;
  const { nameEditActive } = props;
  const { nameEditActiveToggle } = props;
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
      if (nameEditActive === false) {
        return (
          <div className="name">
            <label htmlFor="name-input">
              Name
              <p>{name}</p>
              <button type="button" onClick={nameEditActiveToggle}>
                Edit
              </button>
            </label>
          </div>
        );
      }
      if (nameEditActive === true) {
        return (
          <div className="name">
            <label htmlFor="name-input">
              Name
              <input id="name-input" type="text" defaultValue={name} />
              <button
                type="button"
                onClick={(e) => {
                  nameEditActiveToggle();
                  updateStateNameEmailPhone(e);
                }}
              >
                Submit
              </button>
            </label>
          </div>
        );
      }
    }
    return false;
  };

  return <div>{inputOrStatic()}</div>;
}

export default NameComponent;
