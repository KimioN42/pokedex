import React, { useEffect, useState } from "react";

import { fontStyle, formStyle } from "../utils/styling";
import { saveData } from "../utils/helper";

function Form() {
  useEffect(() => {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const email = localStorage.getItem("email");
    const phoneNumber = localStorage.getItem("phoneNumber");
    const address = localStorage.getItem("address");

    firstName ? setFirstName(firstName) : setFirstName("");
    lastName ? setLastName(lastName) : setLastName("");
    email ? setEmail(email) : setEmail("");
    phoneNumber ? setPhoneNumber(phoneNumber) : setPhoneNumber("");
    address ? setAddress(address) : setAddress("");
    console.log("Form.tsx useEffect");
  }, []);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const phoneRGEX = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!phoneRGEX.test(phoneNumber)) {
      alert("Invalid Phone Number");
    } else {
      saveData("firstName", firstName);
      saveData("lastName", lastName);
      saveData("email", email);
      saveData("phoneNumber", phoneNumber);
      saveData("address", address);
      window.location.href = "/pickYourPokemon";
    }
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");

    localStorage.clear();
    console.log("Form.tsx clearForm");
  };

  return (
    <div style={formStyle.form}>
      <form onSubmit={handleSubmit}>
        <label>
          <span style={fontStyle.defaultFont}>First Name:</span>
          <input
            style={formStyle.formInput}
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="First Name"
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            style={formStyle.formInput}
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            placeholder="Last Name"
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            style={formStyle.formInput}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="johndoe@email.com"
            required
          />
        </label>
        <br />

        <label>
          Phone Number:
          <input
            style={formStyle.formInput}
            type="tel"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            placeholder="(XXX) XXX-XXXX"
            required
          />
        </label>
        <br />
        <label>
          Address:
          <input
            style={formStyle.formInput}
            type="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            placeholder="Address"
            required
          />
        </label>
        <br />
        <div style={formStyle.centerButton}>
          <div style={formStyle.formClear} onClick={clearForm}>
            Clear Form
          </div>
          <button style={formStyle.formSubmit} type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
