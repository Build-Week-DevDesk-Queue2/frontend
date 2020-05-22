import React from "react";
import axios from "axios";
import styled from "styled-components";
import OpenTickets from "./OpenTickets";
import ClosedTickets from "./ClosedTickets";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";

const StudentQueue = () => {
  return (
    <div>
      <Router>
        <nav>
          <NavLink to="/open-tickets">Open Tickets</NavLink>
          <NavLink to="/closed-tickets">Closed Tickets</NavLink>
        </nav>
        <Switch>
          <Route path="/open-tickets" component={OpenTickets} />
          <Route path="/closed-tickets" component={ClosedTickets} />
        </Switch>
      </Router>
      <div className="add-ticket">
        <i class="fas fa-notes-medical"></i>
      </div>
    </div>
  );
};

export default StudentQueue;
