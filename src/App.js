import React from "react";
import { Route, Routes } from "react-router-dom"
import SimpleCalculator from "./pages/SimpleCalculator"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SimpleCalculator/>} exact />
      </Routes>
    </div>
  );
}

export default App;
