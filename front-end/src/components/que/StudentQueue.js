import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import OpenTickets from "./TicketList";
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

const StudentQueue = (props) => {
  //console.log("Student Queue", props);

  let changeNav = (role) => {
    if (role == "student") {
      return <StudentNav role={role} />;
    } else {
      return <HelperNav role={role} />;
    }
  };

  return <div>{changeNav(props.role)}</div>;
};

export default StudentQueue;
