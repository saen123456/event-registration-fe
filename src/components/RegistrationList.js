import React from "react";
import { useRegistrationContext } from "../context/RegistrationContext";

const RegistrationList = () => {
  const { state } = useRegistrationContext();

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {state.registrations.map((reg) => (
          <tr key={reg._id}>
            <td>{reg.firstName}</td>
            <td>{reg.lastName}</td>
            <td>{reg.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RegistrationList;
