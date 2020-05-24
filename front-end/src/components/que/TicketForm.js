import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const TicketForm = () => {
  let history = useHistory();

  return (
    <BackgroundWrap>
      <form>
        <CloseButton
          onClick={() => history.goBack()}
          className="far fa-times-circle"
        ></CloseButton>
        <HeadingContainer>
          <TicketHeading>Let's submit a help ticket.</TicketHeading>
          <RequiredSpan>* Required Fields</RequiredSpan>
        </HeadingContainer>
        <label htmlFor="title" class="required">
          What's going on?
          <input
            className="input"
            id="title"
            type="title"
            name="title"
            placeholder="Add a Title..."
          />
        </label>
        <label htmlFor="issue" class="required">
          What is this issue about? *
          <input className="input" id="issue" type="issue" name="issue" />
        </label>
        <label htmlFor="aboutissue" class="required">
          What is this issue about? *
          <select id="aboutissue" name="aboutissue">
            <option>Select Issue</option>
            <option value="equipment">Equipment</option>
            <option value="people">People</option>
            <option value="track">Track</option>
            <option value="finances">Finances</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label htmlFor="effort">
          What have you tried? *
          <textarea
            className="input"
            id="effort"
            name="effort"
            rows="5"
            cols="40"
          />
        </label>
        <label htmlFor="info">
          Anything else we should know? *
          <textarea
            className="input"
            id="info"
            name="info"
            rows="5"
            cols="40"
          />
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
