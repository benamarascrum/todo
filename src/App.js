import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Err from "./Pages/Err";
import Home from "./Pages/Home";
import TodoList from "./Pages/TodoList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/*" element={<Err />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
