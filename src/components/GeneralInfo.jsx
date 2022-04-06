import React, { useState } from "react";
import NameComponent from "./NameComponent";
import EmailComponent from "./EmailComponent";
import PhoneComponent from "./PhoneComponent";
import SubmitComponent from "./SubmitComponent";
import "../styles/info.css";

function GeneralInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const [nameEditActive, setNameEditActive] = useState(false);
  const [emailEditActive, setEmailEditActive] = useState(false);
  const [phoneEditActive, setPhoneEditActive] = useState(false);

  const updateStateNameEmailPhone = (e) => {
    if (e.target.validity.valid === false) {
      return;
    }
    switch (e.target.id) {
      case "name-input":
        setName(e.target.value);
        break;
      case "email-input":
        setEmail(e.target.value);
        break;
      case "phone-number-input":
        setPhone(e.target.value);
        break;
      default:
        break;
    }
  };

  const nameEditActiveToggle = () => {
    if (nameEditActive === false) {
      setNameEditActive(true);
      setEmailEditActive(false);
      setPhoneEditActive(false);
    }
    if (nameEditActive === true) {
      setNameEditActive(false);
      setEmailEditActive(false);
      setPhoneEditActive(false);
    }
  };

  const emailEditActiveToggle = () => {
    if (emailEditActive === false) {
      setNameEditActive(false);
      setEmailEditActive(true);
      setPhoneEditActive(false);
    }
    if (emailEditActive === true) {
      setNameEditActive(false);
      setEmailEditActive(false);
      setPhoneEditActive(false);
    }
  };

  const phoneEditActiveToggle = () => {
    if (phoneEditActive === false) {
      setNameEditActive(false);
      setEmailEditActive(false);
      setPhoneEditActive(true);
    }
    if (phoneEditActive === true) {
      setNameEditActive(false);
      setEmailEditActive(false);
      setPhoneEditActive(false);
    }
  };

  return (
    <div className="general-info">
      <header>General Information</header>
      <main>
        <form
          onSubmit={(e) => {
            setSubmitted(true);
            e.preventDefault();
          }}
          onChange={updateStateNameEmailPhone}
        >
          <NameComponent
            submitted={submitted}
            name={name}
            updateStateNameEmailPhone={updateStateNameEmailPhone}
            nameEditActive={nameEditActive}
            nameEditActiveToggle={nameEditActiveToggle}
          />
          <EmailComponent
            submitted={submitted}
            email={email}
            updateStateNameEmailPhone={updateStateNameEmailPhone}
            emailEditActive={emailEditActive}
            emailEditActiveToggle={emailEditActiveToggle}
          />
          <PhoneComponent
            submitted={submitted}
            phone={phone}
            updateStateNameEmailPhone={updateStateNameEmailPhone}
            phoneEditActive={phoneEditActive}
            phoneEditActiveToggle={phoneEditActiveToggle}
          />
          <SubmitComponent submitted={submitted} />
        </form>
      </main>
    </div>
  );
}

export default GeneralInfo;
