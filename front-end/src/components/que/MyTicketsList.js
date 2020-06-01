import React from "react";
import ClosedCard from "./ClosedCard";
import styled from "styled-components";
import MyTicketsCard from "./MyTicketsCard";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    tickets: state.tickets,
    user: {
      id: state.user.id
    }
  }
}

const MyTicketsList = (props) => {
  let role = props.role;
  console.log("MyTicketsList", role);
  return (
    <ListCard>
      {props.tickets.filter(ticket => ticket.created_by === props.user.id).map(ticket => {
        console.log(ticket);
        // return(
        //   <MyTicketsCard role={role} ticket={ticket} />
        // )
      })}
      <MyTicketsCard role={role} />
    </ListCard>
  );
};

const ListCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default connect(mapStateToProps, {})(MyTicketsList);
