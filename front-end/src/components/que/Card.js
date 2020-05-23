import React from "react";
import styled from "styled-components";
import css from "../users/createuser.css";

const Card = () => {
  return (
    <CardWrap>
      <div className="ticket-card">
        <StyledCardTitle>Equipment Issue</StyledCardTitle>
        <StyledParagraphTitle>Laptop stopped working</StyledParagraphTitle>
        <div className="open-ticket-tried-section">
          <h4>What you've tried</h4>
          <ul>
            <li>Reboot</li>
            <li>Apple Genius Bar</li>
          </ul>
        </div>
        <div className="open-ticket-info-section">
          <h4>More Info</h4>
          <p>
            I took my laptop to the Apple Genius Bar and they weren't able to
            get it to work. I don't have the money for a replacement right now.
          </p>
        </div>
      </div>
    </CardWrap>
  );
};

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 350px;
  height: auto;
  left: 35%;
  top: 200px;
  background: #ffffff;
  position: absolute;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.02), 2px 3px 8px rgba(0, 0, 0, 0.02);
  border-radius: 5px;
  border-left: 8px solid #007aff;
`;

const StyledCardTitle = styled.span`
  font-size: 13px;
  line-height: 16px;
`;

const StyledParagraphTitle = styled.p`
  font-weight: 600;
  font-size: 21px;
  line-height: 26px;
  margin-top: 0;
`;

export default Card;
