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
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-md space-y-6"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
        />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
        />
      </div>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone Number"
        required
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white text-sm font-medium py-2.5 rounded-lg shadow hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
