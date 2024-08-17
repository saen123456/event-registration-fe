import React, { useState } from "react";
import axios from "axios";
import { useRegistrationContext } from "../context/RegistrationContext";

const SeatsConfis = () => {
  const { dispatch } = useRegistrationContext();
  const [totalSeats, setTotalSeats] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8282/admin/set-seats", {
      totalSeats,
    });

    const response2 = await axios.get(
      "http://localhost:8282/user/available-seats"
    );

    const response3 = await axios.get(
      "http://localhost:8282/user/total-registrations" 
    );

    dispatch({ type: "SET_REGISTRATIONS", payload: response.data });

    dispatch({
      type: "SET_AVAILABLE_SEATS",
      payload: response2.data.availableSeats,
    });

    dispatch({
      type: "SET_TOTAL_SEATS",
      payload: response2.data.totalSeats,
    });

    dispatch({
      type: "SET_TOTAL_REGISTRATIONS",
      payload: response3.data.totalRegistrations,
    });

    setTotalSeats(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-80 p-8 bg-white rounded-xl shadow-md space-y-6 mb-12 mt-12"
    >
      {/* <div className="grid gap-6 md:grid-cols-2">
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
      </div> */}
      <input
        value={totalSeats}
        onChange={(e) => setTotalSeats(e.target.value)}
        placeholder="จำนวนที่นั่งคงเหลือ"
        required
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white text-sm font-medium py-2.5 rounded-lg shadow hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
      >
        อัพเดทที่นั่งคงเหลือ
      </button>
    </form>
  );
};

export default SeatsConfis;
