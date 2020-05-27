import React from "react";
import "./App.css";
import { LoginForm, CreateUserForm, StudentSuccessPage } from './components';
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
      <PrivateRoute path="/student-success" component={StudentSuccessPage} />
    </div>
  );
}
export default App;
