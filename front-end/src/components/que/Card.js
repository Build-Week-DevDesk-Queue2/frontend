import React, { useState } from "react";
import styled from "styled-components";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import css from "../users/createuser.css";
import StudentDropdown from "./StudentDropdown";
import HelperDropdown from "./HelperDropdown";
import StudentCard from "./StudentCard";
import HelperCard from "./HelperCard";

const Card = (props) => {
  ///////////////////////////////////////////
  ///       STUDENT DROPDOWN STATE       ///
  /////////////////////////////////////////
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  let role = props.role;
  console.log("Card", role);

  let changeDropdown = (role) => {
    if (role == "student") {
      return <StudentDropdown />;
    } else {
      return <HelperDropdown />;
    }
  };

  let changeCard = (role) => {
    if (role == "student") {
      return <StudentCard role={role} />;
    } else {
      return <HelperCard role={role} />;
    }
  };

  return (
    <CardWrap>
      <div className="ticket-card">
        {changeDropdown(role)}
        {changeCard(role)}
      </div>
    </CardWrap>
  );
};

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

const DropDownButton = styled.button`
  background-color: #6c767d;
  color: white;
`;

export default Card;
