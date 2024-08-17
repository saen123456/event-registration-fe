import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";

const RegistrationContext = createContext();

const initialState = {
  registrations: [],
  availableSeats: 0,
  totalRegistrations: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_REGISTRATIONS":
      return { ...state, registrations: action.payload };
    case "SET_AVAILABLE_SEATS":
      return { ...state, availableSeats: action.payload };
    case "SET_TOTAL_SEATS":
      return { ...state, totalSeats: action.payload };
    case "SET_TOTAL_REGISTRATIONS":
      return { ...state, totalRegistrations: action.payload };
    default:
      return state;
  }
};

export const RegistrationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("http://localhost:8282/user/registrations").then((response) => {
      dispatch({ type: "SET_REGISTRATIONS", payload: response.data });
    });

    axios.get("http://localhost:8282/user/available-seats").then((response) => {
      dispatch({
        type: "SET_AVAILABLE_SEATS",
        payload: response.data.availableSeats,
      });
      dispatch({
        type: "SET_TOTAL_SEATS",
        payload: response.data.totalSeats,
      });
    });

    axios
      .get("http://localhost:8282/user/total-registrations")
      .then((response) => {
        dispatch({
          type: "SET_TOTAL_REGISTRATIONS",
          payload: response.data.totalRegistrations,
        });
      });
  }, []);

  return (
    <RegistrationContext.Provider value={{ state, dispatch }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistrationContext = () =>
  React.useContext(RegistrationContext);
