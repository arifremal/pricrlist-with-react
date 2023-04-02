import React from "react";
import Navbar from "./Components/NAvBar/Navbar";
import Pricelist from "./Components/Pricelist/Pricelist";
import Dashboard from "./Components/Dashboard/Dashboard";

const App = () => {
  return (
    <div>

      <Navbar></Navbar>
      <Pricelist></Pricelist>
      <Dashboard></Dashboard>
    </div>
  );
};

export default App;
