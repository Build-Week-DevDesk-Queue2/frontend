import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import OpenTickets from "./OpenTickets";
import ClosedTickets from "./ClosedTickets";
import TicketForm from "./TicketForm";
import StudentNav from "./StudentNav";
import HelperNav from "./HelperNav";
import SuccessMessage from "./SuccessMessage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";

const StudentQueue = () => {
  let role = "student";
  let changeNav = () => {
    if (role == "student") {
      return <StudentNav />;
    } else {
      return <HelperNav />;
    }
  };

  return <div>{changeNav(role)}</div>;
};

export default StudentQueue;
