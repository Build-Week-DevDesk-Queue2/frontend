import React, { useState } from "react";
import styled from "styled-components";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import css from "../users/createuser.css";
import MyTicketsHelperDropdown from "./MyTicketsHelperDropdown";

const MyTicketsCard = (props) => {
  let role = props.role;
  console.log("MyTicketsCard", props);

  return (
    <CardWrap>
      <div className="ticket-card">
        <MyTicketsHelperDropdown role={role} />
        <StyledCardTitle>Equipment Issue</StyledCardTitle>
        <StyledParagraphTitle>Laptop stopped working</StyledParagraphTitle>
      </div>
    </CardWrap>
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

const CardWrap = styled.div`
  text-align: left;
  width: 350px;
  height: auto;
  background: #ffffff;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.02), 2px 3px 8px rgba(0, 0, 0, 0.02);
  border-radius: 5px;
  border-left: 8px solid #007aff;
  margin-top: 30px;
`;

export default MyTicketsCard;
