import React from "react";
import "./App.css";
import CreateUserForm from "./components/users/CreateUserForm";
import LoginForm from "./components/users/LoginForm";
import StudentSuccessPage from "./components/pages/StudentSuccessPage";

function App() {
  return (
    <div className="App">
      <StudentSuccessPage />
    </div>
  );
}

export default App;
