import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import TicketList from "./TicketList";
import ClosedTickets from "./ClosedTickets";
import TicketForm from "./TicketForm";
import SuccessMessage from "./SuccessMessage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";
import OpenTickets from "./TicketList";

const StudentNav = (props) => {
  //console.log("Student Nav", props);
  let role = props.role;
  return (
    <div className="student-nav-container">
      <SuccessMessage timeout="5000" />
      <Router>
        <NavLink className="create-ticket-icon" to="/dashboard/create-ticket">
          <i className="fas fa-notes-medical" id="notes-medical"></i>
        </NavLink>
        <nav>
          <NavLink to="/dashboard/open-tickets">Open Tickets</NavLink>
          <NavLink to="/dashboard/closed-tickets">Closed Tickets</NavLink>
        </nav>
        <Switch>
          <Route
            exact
            path="/dashboard"
            render={() => {
              return <Redirect to="/dashboard/open-tickets" />;
            }}
          />
          <Route
            path="/dashboard/open-tickets"
            render={(props) => <TicketList {...props} role={role} />}
          />
          <Route path="/dashboard/closed-tickets" component={ClosedTickets} />
          <Route path="/dashboard/create-ticket" component={TicketForm} />
        </Switch>
      </Router>
    </div>
  );
};

export default StudentNav;
