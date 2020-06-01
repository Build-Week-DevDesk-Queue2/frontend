import React from "react";
import ClosedCard from "./ClosedCard";
import styled from "styled-components";
import { connect } from 'react-redux';

const mapStateToPtops = state => {
  return {
    tickets: state.tickets
  }
}

const ClosedTickets = props => {
  return (
    <ListCard>
      {props.tickets.filter(ticket => ticket.completed).map(ticket => {
        return <ClosedCard role={props.role} ticket={ticket} key={ticket.id} />;
      })}
    </ListCard>
  );
};

const ListCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default connect(mapStateToPtops, {})(ClosedTickets);
