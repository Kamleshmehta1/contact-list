import "./App.css";
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Header from "./Header.js";
import Contacts from "./Contacts";
import "./Form.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const toggle = useSelector((state) => state.toggle);
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/list" element={<Contacts />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
