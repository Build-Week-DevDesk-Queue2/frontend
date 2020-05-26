import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";
import CreateUserForm from "./CreateUserForm";
import "./createuser.css";

/////////////////////////
///       FORM        ///
/////////////////////////

const Login = () => {
  ////////////////////////
  ///      STATE      ///
  ///////////////////////

  // Initial state for the Login form
  const initialFormState = {
    email: "",
    password: "",
  };

  // State for inputs
  const [formState, setFormState] = useState(initialFormState);

  // State for errors
  const [errors, setErrors] = useState(initialFormState);

  ////////////////////////
  ///     VALIDATION   ///
  ////////////////////////

  // FORM SCHEMA Validation for Login Page
  const formSchema = yup.object().shape({
    email: yup.string().email("Must be a valid email address").required(),
    password: yup.string().required("Password is a required field"),
  });

  // Validation for each input
  const validateChange = (e) => {
    yup
      // Read the value of schema key using name of input
      .reach(formSchema, e.target.name)
      // Validate the value of input
      .validate(e.target.value)
      // If the validation passes, clear all errors
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };

  ////////////////////////
  /// INPUT ONCHANGE   ///
  ////////////////////////
  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]: e.target.value,
    };
    validateChange(e); // Validates every change in every input
    setFormState(newFormData); // Update state with new data
  };

  ////////////////////////
  ///     ON SUBMIT    ///
  ////////////////////////

  return (
    <div className="create-account-form">
      <BackgroundWrap>
        <LoginHeading>LOGIN</LoginHeading>
        <form>
          <label htmlFor="email">
            {/* EMAIL */}
            <input
              className="input"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={inputChange}
              value={formState.email}
            />
            {errors.email.length > 0 ? (
              <p className="error">{errors.email}</p>
            ) : null}
          </label>
          <label htmlFor="password">
            {/* PASSWORD */}
            <input
              className="input"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={inputChange}
              value={formState.password}
            />
            {errors.password.length > 0 ? (
              <p className="error">{errors.password}</p>
            ) : null}
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
