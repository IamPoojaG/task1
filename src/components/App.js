import React, { useState, useEffect } from "react";
import "../components/App.css";
import Login from "./Login";
import Registration from "./Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

// HERE FOR ROUTING WE HAVE TO DEFINE PATHS SO
// THROUGH REACT-ROUTER WE CAN ROUTE AND GIVE THE PATH TO INDIVIDUAL COMPONENTS

function App() {
  const LOCAL_STORAGE_KEY = "info";

  const [info, setinfo] = useState({
    name: "",
    email: "",
    password: "",
    ConfirmPassword: "",
    address: "",
    phoneNumber: "",
    role: ""
  });

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) {
      setinfo(retriveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(info));
  }, [info]);

  let register = (e) => {
    e.preventDefault();

    if (
      !info.name ||
      !info.email ||
      !info.password ||
      !info.address ||
      !info.phoneNumber ||
      !info.role
    ) {
      alert("Complete all the fields!!!");
      return;
    }
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/registration"
            element={
              <Registration setinfo={setinfo} info={info} register={register} />
            }
          />
          <Route path="/home" element={<Home info={info} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
