import React, { useState } from "react";
import styled from "styled-components";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import css from "../users/createuser.css";

const HelperDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Assign</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Assign to me</DropdownItem>
        <DropdownItem>Section Lead</DropdownItem>
        <DropdownItem>Student Success</DropdownItem>
        <DropdownItem>Human Resources</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default HelperDropdown;
