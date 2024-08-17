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
        <div className="flex flex-row">
          {" "}
          {/* ใช้ flex-row เพื่อจัดเรียงในแนวนอน และ space-x-6 เพื่อเพิ่มช่องว่างระหว่างคอมโพเนนต์ */}
          <SeatsInfo />
          <RegistrationForm />
          <SeatsConfig />
        </div>
        <RegistrationList />
      </div>
    </RegistrationProvider>
  );
}

export default App;
