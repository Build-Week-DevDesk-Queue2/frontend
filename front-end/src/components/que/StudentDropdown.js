import React, { useState } from "react";
import styled from "styled-components";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import css from "../users/createuser.css";

const StudentDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Manage</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Edit Ticket</DropdownItem>
        <DropdownItem>Delete Ticket</DropdownItem>
        <DropdownItem>Mark Resolved</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default StudentDropdown;
