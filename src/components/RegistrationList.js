import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useRegistrationContext } from "../context/RegistrationContext";
import * as dayjs from "dayjs";

const RegistrationList = () => {
  const { state, dispatch } = useRegistrationContext(); // เพิ่ม dispatch เพื่อส่ง action

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this registration?"
    );

    if (confirmDelete) {
      const response = await axios.post(
        "http://localhost:8282/user/cancel/register",
        {
          id,
        }
      );

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
        type: "SET_TOTAL_REGISTRATIONS",
        payload: response3.data.totalRegistrations,
      });
    }
  };

  const columns = [
    { field: "no", headerName: "No", width: 70 },
    { field: "firstName", headerName: "First Name", width: 130 },
    { field: "lastName", headerName: "Last Name", width: 130 },
    { field: "phone", headerName: "Phone", width: 130 },
    {
      field: "createdAt",
      headerName: "Time",
      width: 180,
    },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => (
        <button
          onClick={() => handleDelete(params.row.id)}
          className="bg-red-500 text-white text-sm py-0.5 px-1 rounded"
        >
          ยกเลิกการจอง
        </button>
      ),
    },
  ];

  const rows = state.registrations.map((reg, index) => ({
    no: index + 1,
    id: reg._id, // ใช้ _id ที่เป็น unique id จาก database
    firstName: reg.firstName,
    lastName: reg.lastName,
    phone: reg.phone,
    createdAt: dayjs(reg.createdAt).format("DD/MM/YYYY HH:mm:ss"),
  }));

  return (
    <div style={{ height: 400, width: "60%" }} className="mt-12 mx-auto">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default RegistrationList;
