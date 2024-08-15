import React from "react";
import { useRegistrationContext } from "../context/RegistrationContext";

const SeatsInfo = () => {
  const { state } = useRegistrationContext();

  return (
    <div>
      <p>Available Seats: {state.availableSeats}</p>
      <p>Total Registrations: {state.totalRegistrations}</p>
    </div>
  );
};

export default SeatsInfo;
