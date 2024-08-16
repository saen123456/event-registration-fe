import React from "react";
import { useRegistrationContext } from "../context/RegistrationContext";
import * as dayjs from "dayjs";

const RegistrationList = () => {
  const { state } = useRegistrationContext();
  console.log(state);

  return (
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mt-16 max-w-md">
      <thead className="bg-blue-500 text-white">
        <tr>
          <th className="py-3 px-6 text-left">No</th>
          <th className="py-3 px-6 text-left">First Name</th>
          <th className="py-3 px-6 text-left">Last Name</th>
          <th className="py-3 px-6 text-left">Phone</th>
          <th className="py-3 px-6 text-left">Time</th>
        </tr>
      </thead>
      <tbody>
        {state?.registrations?.map((reg, index) => (
          <tr
            key={reg._id}
            className="border-b border-gray-200 hover:bg-gray-100"
          >
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{reg.firstName}</td>
            <td className="py-3 px-6">{reg.lastName}</td>
            <td className="py-3 px-6">{reg.phone}</td>
            <td className="py-3 px-6">{dayjs(reg.createdAt).format("DD/MM/YYYY HH:mm:ss")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RegistrationList;
