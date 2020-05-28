import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import "../users/createuser.css";
import StudentSuccessPage from "../pages/Dashboard";

const TicketForm = () => {
  let history = useHistory();

  ////////////////////////
  ///      STATE      ///
  ///////////////////////

  // Initial state for the Create User Form
  const initialFormState = {
    title: "",
    issue: "",
    aboutissue: "",
    effort: "",
    info: "",
  };

  // State for inputs
  const [formState, setFormState] = useState(initialFormState);

  // State for errors
  const [errors, setErrors] = useState(initialFormState);

  ////////////////////////
  ///     VALIDATION   ///
  ////////////////////////

  // FORM SCHEMA Validation for Ticket Form
  const formSchema = yup.object().shape({
    title: yup.string().required("This is a required field"),
    issue: yup.string().required("This is a required field"),
    aboutissue: yup.string().required("This is a required field"),
    effort: yup.string().required("This is a required field"),
    info: yup.string().required("This is a required field"),
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

  ///////////////////////////////////////
  ///  Close Ticket -> Success Page  ///
  /////////////////////////////////////
  const toSuccessPage = () => {
    history.push("/dashboard");
  };

  return (
    <BackgroundWrap>
      <form>
        <CloseButton
          onClick={toSuccessPage}
          className="far fa-times-circle"
        ></CloseButton>
        <HeadingContainer>
          <TicketHeading>Let's submit a help ticket.</TicketHeading>
          <RequiredSpan>* Required Fields</RequiredSpan>
        </HeadingContainer>
        <label htmlFor="title" className="required">
          What's going on?
          <input
            className="input"
            id="title"
            type="title"
            name="title"
            placeholder="Add a Title..."
            onChange={inputChange}
            value={formSchema.name}
          />
          {errors.title.length > 0 ? (
            <p className="error">{errors.title}</p>
          ) : null}
        </label>
        <label htmlFor="issue" className="required">
          What is this issue about? *
          <input
            className="input"
            id="issue"
            type="issue"
            name="issue"
            onChange={inputChange}
            value={formSchema.issue}
          />
          {errors.issue.length > 0 ? (
            <p className="error">{errors.issue}</p>
          ) : null}
        </label>
        <label htmlFor="aboutissue" className="required">
          Topic *
          <select id="aboutissue" name="aboutissue">
            <option>Select Issue</option>
            <option value="equipment">Equipment</option>
            <option value="people">People</option>
            <option value="track">Track</option>
            <option value="finances">Finances</option>
            <option value="Other">Other</option>
          </select>
          {errors.aboutissue.length > 0 ? (
            <p className="error">{errors.topic}</p>
          ) : null}
        </label>
        <label htmlFor="effort">
          What have you tried? *
          <textarea
            className="input"
            id="effort"
            name="effort"
            rows="5"
            cols="40"
            onChange={inputChange}
            value={formSchema.effort}
          />
          {errors.effort.length > 0 ? (
            <p className="error">{errors.effort}</p>
          ) : null}
        </label>
        <label htmlFor="info">
          Anything else we should know? *
          <textarea
            className="input"
            id="info"
            name="info"
            rows="5"
            cols="40"
            onChange={inputChange}
            value={formSchema.info}
          />
          {errors.info.length > 0 ? (
            <p className="error">{errors.info}</p>
          ) : null}
        </label>
        <button type="submit">SUBMIT TICKET</button>
      </form>
    </BackgroundWrap>
  );
};

const BackgroundWrap = styled.div`
  background: #f9fafb;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -430px;
  margin-left: -610px;
  width: 960px;
  height: 100vh;
  padding: 30px 130px 0px 120px;
`;

const RequiredSpan = styled.span`
  position: absolute;
  left: 37.5%;
`;

const TicketHeading = styled.h1`
  text-align: start;
`;

const HeadingContainer = styled.div`
  margin-bottom: 10%;
`;

const CloseButton = styled.i`
  position: absolute;
  top: 5%;
  left: 63%;
  font-size: 18px;
`;

export default TicketForm;
