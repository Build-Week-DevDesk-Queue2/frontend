import React from "react";
import "./App.css";
import CreateUserForm from "./components/users/CreateUserForm";
import LoginForm from "./components/users/LoginForm";
import StudentSuccessPage from "./components/pages/StudentSuccessPage";
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => localStorage.getItem('token') ? (
    <Component {...props} />
  ) : (
    <Redirect to="/" />
  )} />
)

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LoginForm} />
      <Route path="/sign-up" component={CreateUserForm} />
      <Route path="/student-success" component={StudentSuccessPage} />
    </div>
  );
}

export default App;
