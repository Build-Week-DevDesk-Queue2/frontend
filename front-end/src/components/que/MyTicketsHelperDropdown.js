import React, { useState } from "react";
import styled from "styled-components";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import css from "../users/createuser.css";

const MyTicketsHelperDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Assigned</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Unassign</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default MyTicketsHelperDropdown;
