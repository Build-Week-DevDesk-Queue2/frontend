import React, { useState } from "react";
import styled from "styled-components";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import css from "../users/createuser.css";

const HelperCard = (props) => {
  return (
    <div>
      <StyledCardTitle>Equipment Issue</StyledCardTitle>
      <StyledParagraphTitle>Laptop stopped working</StyledParagraphTitle>
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

export default HelperCard;
