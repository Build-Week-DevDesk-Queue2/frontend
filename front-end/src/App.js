import React from "react";
import "./App.css";
import { LoginForm, CreateUserForm, StudentSuccessPage } from './components';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    tickets: state.tickets,
    user: {
      username: state.user.username,
      role: state.user.role
    }
  }
}

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
export default connect(mapStateToProps, {})(App);
