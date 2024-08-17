import React from "react";
import { RegistrationProvider } from "./context/RegistrationContext";
import RegistrationForm from "./components/RegistrationForm";
import RegistrationList from "./components/RegistrationList";
import SeatsInfo from "./components/SeatsInfo";
import SeatsConfig from "./components/SeatsConfig";

function App() {
  return (
    <RegistrationProvider>
      <div className="container mx-auto mt-12">
        <div className="flex flex-row justify-between gap-6">
          {/* ใช้ flex-row และ justify-between เพื่อจัดเรียงแนวนอนและให้มีช่องว่างระหว่างคอมโพเนนต์ */}
          <SeatsInfo className="flex-1" />
          <RegistrationForm className="flex-1" />
          <SeatsConfig className="flex-1" />
        </div>
        <div className="mt-6">
          <RegistrationList />
        </div>
      </div>
    </RegistrationProvider>
  );
}

export default App;
