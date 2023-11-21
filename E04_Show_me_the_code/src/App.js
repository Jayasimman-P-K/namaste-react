import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

function App() {
  return (
    <UserContext.Provider value={{ loggedInUser: "Jayasimman" }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
