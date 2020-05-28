import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import axios from "axios";
import tickets from "../../tickets";

const OpenTickets = (props) => {
  const [ticket, setTicket] = useState(tickets);

  console.log("Ticket List", ticket);
  return (
    <ListCard>
      {ticket.map((ticket) => {
        return <Card role={props.role} ticket={ticket} />;
      })}
    </ListCard>
  );
};

const ListCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackgroundWrap = styled.div`
  background: #fff;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -430px;
  margin-left: -600px;
  width: 960px;
  padding: 30px 130px 0px 120px;
`;

export default OpenTickets;
