import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";
import * as yup from "yup";
import styled from "styled-components";
import CreateUserForm from "./CreateUserForm";
import "./createuser.css";
import { axiosWithAuth } from "../../auth/axiosWithAuth";

/////////////////////////
///       FORM        ///
/////////////////////////

const initialState = {
  username: '',
  password: ''
}

const Login = props => {
  // Form State
  const [credentials, setCredentials] = useState(initialState);

  // Handler function for form changes
  const handleChanges = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  }

  // Function to post form data to API
  const loginRequest = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/users/login', credentials)
      .then(res => {
          console.log(res);
          localStorage.setItem('token', res.data.token);
          setCredentials(initialState);
          props.history.push('/student-success');
        }
      )
      .catch(err => console.log(err))
  }

  return (
    <div className="create-account-form">
      <BackgroundWrap>
        <LoginHeading>LOGIN</LoginHeading>
        <form onSubmit={loginRequest}>
          <label htmlFor="username">
            {/* EMAIL */}
            <input
              className="input"
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChanges}
            />
          </label>
          <label htmlFor="password">
            {/* PASSWORD */}
            <input
              className="input"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChanges}
            />
          </label>
          <button type="submit">LOG IN</button>
          <h2>
            <span>or</span>
          </h2>
          <Router>
            <StyledLink className="signin" to="/sign-up">
              Create an Account
            </StyledLink>
            <Route path="/sign-up" component={CreateUserForm} />
          </Router>
        </form>
      </BackgroundWrap>
    </div>
  );
};

/////////////////////////
/// STYLED COMPONENTS ///
/////////////////////////

const LoginHeading = styled.span`
  color: #333333;
  font-weight: 800;
  font-size: 24px;
  line-height: 1.2;
  text-align: center;
  display: block;
  padding-bottom: 25px;
  margin: 0 0 0 5%;
`;

const BackgroundWrap = styled.div`
  background: #fff;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -300px;
  margin-left: -600px;
  width: 960px;
  padding: 30px 130px 130px 95px;
`;

const StyledLink = styled(Link)`
  margin: 5% 5%;
  width: 100%;
  display: inline-block;
  padding: 15px 0px;
  font-size: 1.2rem;
  text-transform: uppercase;
  border: 0;
  border-radius: 25px;
  letter-spacing: 2px;
  line-height: 16px;
  outline: none;
  background-color: #efefef;
  color: #3b394e;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  text-decoration: none;
`;

export default Login;
