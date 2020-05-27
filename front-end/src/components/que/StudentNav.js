import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import OpenTickets from "./OpenTickets";
import ClosedTickets from "./ClosedTickets";
import TicketForm from "./TicketForm";
import SuccessMessage from "./SuccessMessage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";

const StudentNav = () => {
  return (
    <div>
      <SuccessMessage />
      <Router>
        <nav>
          <NavLink to="/open-tickets">Open Tickets</NavLink>
          <NavLink to="/closed-tickets">Closed Tickets</NavLink>
        </nav>
        <NavLink to="/create-ticket">
          <i className="fas fa-notes-medical" id="notes-medical"></i>
        </NavLink>
        <Switch>
          <Route path="/open-tickets" component={OpenTickets} />
          <Route path="/closed-tickets" component={ClosedTickets} />
          <Route path="/create-ticket" component={TicketForm} />
        </Switch>
      </Router>
    </div>
  );
};

export default StudentNav;
