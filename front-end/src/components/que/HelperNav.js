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

const HelperNav = (props) => {
  console.log("Helper Nav", props);
  let role = props.role;
  return (
    <div>
      <SuccessMessage />
      <Router>
        <nav>
          <NavLink to="/dashboard/open-tickets">All Tickets</NavLink>
          <NavLink to="/dashboard/closed-tickets">My Tickets</NavLink>
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
          <Route path="/dashboard/open-tickets" component={TicketList} />
          <Route path="/dashboard/closed-tickets" component={ClosedTickets} />
        </Switch>
      </Router>
    </div>
  );
};

export default HelperNav;
