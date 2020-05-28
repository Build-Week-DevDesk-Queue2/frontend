import React from "react";
import "./App.css";
import { LoginForm, CreateUserForm, Dashboard } from "./components";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    user: {
      username: state.user.username,
      role: state.user.role,
    },
    success: state.success,
  };
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LoginForm} />
      <Route path="/sign-up" component={CreateUserForm} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
}
export default connect(mapStateToProps, {})(App);
