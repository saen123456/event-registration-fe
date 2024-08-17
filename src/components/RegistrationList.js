import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useRegistrationContext } from "../context/RegistrationContext";
import * as dayjs from "dayjs";

const RegistrationList = () => {
  const { state } = useRegistrationContext();

  const columns = [
    { field: "id", headerName: "No", width: 70 },
    { field: "firstName", headerName: "First Name", width: 130 },
    { field: "lastName", headerName: "Last Name", width: 130 },
    { field: "phone", headerName: "Phone", width: 130 },
    {
      field: "createdAt",
      headerName: "Time",
      width: 180,
      // valueGetter: (params) =>
        // dayjs(params.row?.createdAt).format("DD/MM/YYYY HH:mm:ss"),
    },
  ];

  const rows = state.registrations.map((reg, index) => ({
    id: index + 1,
    firstName: reg.firstName,
    lastName: reg.lastName,
    phone: reg.phone,
    createdAt: dayjs(reg.createdAt).format("DD/MM/YYYY HH:mm:ss"),
  }));

  return (
    <div style={{ height: 400, width: "50%" }} class="mt-12 mx-auto">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default RegistrationList;
