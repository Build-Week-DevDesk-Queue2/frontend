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

const HelperNav = () => {
  return (
    <div>
      <SuccessMessage />
      <Router>
        <nav>
          <NavLink to="/open-tickets">All Tickets</NavLink>
          <NavLink to="/closed-tickets">My Tickets</NavLink>
        </nav>
        <Switch>
          <Route path="/open-tickets" component={OpenTickets} />
          <Route path="/closed-tickets" component={ClosedTickets} />
        </Switch>
      </Router>
    </div>
  );
};

export default HelperNav;
