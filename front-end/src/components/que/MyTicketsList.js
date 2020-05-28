import React from "react";
import ClosedCard from "./ClosedCard";
import styled from "styled-components";
import MyTicketsCard from "./MyTicketsCard";
import axios from "axios";

const MyTicketsList = (props) => {
  let role = props.role;
  console.log("MyTicketsList", role);
  return (
    <ListCard>
      <MyTicketsCard role={role} />
    </ListCard>
  );
};

const ListCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MyTicketsList;
