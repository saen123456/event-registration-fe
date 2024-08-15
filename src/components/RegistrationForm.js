import React, { useState } from "react";
import axios from "axios";
import { useRegistrationContext } from "../context/RegistrationContext";

const RegistrationForm = () => {
  const { dispatch } = useRegistrationContext();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8282/user/register", {
      firstName,
      lastName,
      phone,
    });

    dispatch({ type: "SET_REGISTRATIONS", payload: response.data });
    setFirstName("");
    setLastName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        required
      />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        required
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone Number"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
