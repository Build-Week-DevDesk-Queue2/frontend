import React, { useState, useEffect } from "react";
import * as yup from "yup";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";
import "./createuser.css";
import { axiosWithAuth } from "../../auth/axiosWithAuth";
import { connect } from 'react-redux';
import { registerUser } from '../../actions/actions';

const mapStateToProps = state => {
  return { 
    success: state.success
  }
}

/////////////////////////
///       FORM        ///
/////////////////////////

const CreateUserForm = (props) => {
  useEffect(() => {
    if (props.success) {
      props.history.push('dashboard');
    }
  }, [props.success])
  ////////////////////////
  ///      STATE      ///
  ///////////////////////

  // Initial state for the Create User Form
  const initialFormState = {
    username: "",
    password: "",
    role: "",
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
    username: yup.string().required("Username is a required field"),
    password: yup.string().required("Password is a required field"),
    role: yup.string().required("Role is a required field"),
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
  ///  INPUT ONCHANGE  ///
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
  ///   ROLE ONCHANGE  ///
  ////////////////////////

  // const inputChangeRole = (e) => {
  //   let roles = formState.roles;
  //   let role = e.target.name;
  //   let selected = e.target.checked;
  //   if (selected) {
  //     roles.push(role);
  //   } else {
  //     let index = roles.indexOf(role);
  //     roles.splice(index, 1);
  //   }
  //   e.persist();
  //   const newFormData = {
  //     ...formState,
  //     roles: roles,
  //   };
  //   console.log(roles);
  //   setFormState(newFormData);
  // };

  ////////////////////////
  ///     ON SUBMIT    ///
  ////////////////////////

  const registerUser = (e) => {
    e.preventDefault();
    props.registerUser(formState);
  };

  return (
    <div className="create-account-form">
      <BackgroundWrap>
        <CreateAccountHeading>We're Here to help.</CreateAccountHeading>
        <CreateAccountSubHeading>
          Create an account to start receiving help!
        </CreateAccountSubHeading>

        <form onSubmit={registerUser}>
          <label htmlFor="username">
            {/* NAME */}
            <input
              className="input"
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              onChange={inputChange}
              value={formSchema.username}
            />
            {errors.username.length > 0 ? (
              <p className="error">{errors.username}</p>
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
              value={formSchema.password}
            />
            {errors.password.length > 0 ? (
              <p className="error">{errors.password}</p>
            ) : null}
          </label>
          <label htmlFor="role" className="role">
            My Role:
            <input
              type="radio"
              id="student"
              name="role"
              value="student"
              checked={formState.role === "student"}
              onChange={inputChange}
            />
            <label htmlFor="student">Student</label>
            <input
              type="radio"
              id="helper"
              name="role"
              value="helper"
              checked={formState.role === "helper"}
              onChange={inputChange}
            />
            <label htmlFor="helper">Helper</label>
            {errors.roles === [] ? (
              <p className="error">{errors.roles}</p>
            ) : null}
          </label>
          <button type="submit">Create Account</button>
          <h2>
            <span>or</span>
          </h2>
          <StyledLink to="/">Sign In</StyledLink>
        </form>
      </BackgroundWrap>
    </div>
  );
};

/////////////////////////
/// STYLED COMPONENTS ///
/////////////////////////

const CreateAccountHeading = styled.span`
  color: #333333;
  font-weight: 800;
  font-size: 24px;
  line-height: 1.2;
  text-align: center;
  display: block;
  padding-bottom: 25px;
  margin: 0 0 0 5%;
`;

const CreateAccountSubHeading = styled.span`
  color: #333333;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.2;
  text-align: center;
  display: block;
  width: 330px;
  margin: 0 35%;
  padding-bottom: 25px;
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
  margin: 5% 4%;
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

export default connect(mapStateToProps, {registerUser})(CreateUserForm);
