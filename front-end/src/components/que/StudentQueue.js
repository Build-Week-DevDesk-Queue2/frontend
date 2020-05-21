import React from "react";
import axios from "axios";
import OpenTickets from "./OpenTickets";
import ClosedTickets from "./ClosedTickets";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  useRouteMatch,
} from "react-router-dom";

const StudentQueue = () => {
  return (
    <nav>
      <Router>
        <Route path="/open-tickets" component={OpenTickets}>
          <Link to="/open-tickets" component={OpenTickets}>
            Open Tickets
          </Link>
          <Link to="/closed-tickets">Closed Tickets</Link>
        </Route>
        <Route path="/closed-tickets" component={ClosedTickets}>
          <Link to="/closed-tickets" component={ClosedTickets}>
            Closed Tickets
          </Link>
          <Link to="/open-tickets">Open Tickets</Link>
        </Route>
      </Router>
    </nav>
  );
};

export default StudentQueue;
