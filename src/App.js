import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Characters from "./Pages/Characters";
import Episodes from "./Pages/Episodes";
import Locations from "./Pages/Locations";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
