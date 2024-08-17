import React from "react";
import { useRegistrationContext } from "../context/RegistrationContext";

const SeatsInfo = () => {
  const { state } = useRegistrationContext();

  return (
    <div className="max-w-md mx-auto p-8 bg-gray-100 rounded-xl shadow-md space-y-6 mb-12 mt-12">
      <p className="text-lg font-semibold">
        <h1>Event Registration</h1>
      </p>
      <p className="text-lg font-semibold">
        ที่นั่งทั้งหมด:{" "}
        <span className="text-blue-500">{state.totalSeats}</span>
      </p>
      <p className="text-lg font-semibold">
        ที่นั่งคงเหลือ:{" "}
        <span className="text-blue-500">{state.availableSeats}</span>
      </p>
      <p className="text-lg font-semibold">
        ที่นั่งที่ถูกจองแล้ว:{" "}
        <span className="text-green-500">{state.totalRegistrations}</span>
      </p>
    </div>
  );
};

export default SeatsInfo;
