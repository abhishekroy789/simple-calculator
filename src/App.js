import React from "react";
import { Route, Routes } from "react-router-dom";
import SimpleCalculator from "./pages/SimpleCalculator";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SimpleCalculator />} exact />
    </Routes>
  );
}

export default App;
