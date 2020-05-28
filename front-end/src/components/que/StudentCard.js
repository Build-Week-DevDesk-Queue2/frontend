import React, { useState } from "react";
import styled from "styled-components";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import css from "../users/createuser.css";

const StudentCard = (props) => {
  let role = props.role;
  console.log("StudentCard", props);
  return (
    <div>
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
          I took my laptop to the Apple Genius Bar and they weren't able to get
          it to work. I don't have the money for a replacement right now.
        </p>
      </div>
    </div>
  );
};

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

export default StudentCard;
