import React from "react";
import { RegistrationProvider } from "./context/RegistrationContext";
import RegistrationForm from "./components/RegistrationForm";
import RegistrationList from "./components/RegistrationList";
import SeatsInfo from "./components/SeatsInfo";

function App() {
  return (
    <RegistrationProvider>
      <div class="">
        <SeatsInfo />
        <RegistrationForm />
        <RegistrationList />
      </div>
    </RegistrationProvider>
  );
}

export default App;
