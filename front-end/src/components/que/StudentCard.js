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
  let ticket = props.ticket;
  console.log("StudentCardTicket", ticket);

  let role = props.role;
  console.log("StudentCard", props);
  return (
    <div>
      <StyledCardTitle>{ticket.title}</StyledCardTitle>
      <StyledParagraphTitle>{ticket.issue}</StyledParagraphTitle>
      <div className="open-ticket-tried-section">
        <h4>Effort</h4>
        <ul>
          <li>{ticket.effort}</li>
        </ul>
      </div>
      <div className="open-ticket-info-section">
        <h4>More Info</h4>
        <p>{ticket.info}</p>
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
