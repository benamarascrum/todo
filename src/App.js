import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Err from "./Pages/Err";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Err />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
