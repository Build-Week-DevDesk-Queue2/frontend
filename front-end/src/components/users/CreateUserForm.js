import React from "react";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";
import ".../createuser.css";
/////////////////////////
///       FORM        ///
/////////////////////////

const CreateUserForm = () => {
  return (
    <div className="create-account-form">
      <CreateAccountHeading>Create Account</CreateAccountHeading>
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
          Pick Your Role:
        </label>
        <input type="checkbox" id="student" name="student" value="student" />
        <label htmlFor="role">Student</label>
        <input type="checkbox" id="helper" name="helper" value="helper" />
        <label htmlFor="role">Helper</label>
      </form>
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
`;

export default CreateUserForm;
