import React from "react";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";
import "./createuser.css";

/////////////////////////
///       FORM        ///
/////////////////////////

const CreateUserForm = () => {
  return (
    <div className="create-account-form">
      <BackgroundWrap>
        <CreateAccountHeading>We're Here to help.</CreateAccountHeading>
        <CreateAccountSubHeading>
          Create an account to start receiving help!
        </CreateAccountSubHeading>
        <form>
          <label htmlFor="name">
            {/* NAME */}
            <input className="input" id="name" type="text" placeholder="Name" />
          </label>
          <label htmlFor="email">
            {/* EMAIL */}
            <input
              className="input"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
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
            />
          </label>
          <label htmlFor="role" className="role">
            My Role:
            <input type="checkbox" id="student" name="role" value="student" />
            <label htmlFor="role">Student</label>
            <input type="checkbox" id="helper" name="role" value="helper" />
            <label htmlFor="role">Helper</label>
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

export default CreateUserForm;
