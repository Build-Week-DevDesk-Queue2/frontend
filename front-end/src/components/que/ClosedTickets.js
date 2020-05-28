import React from "react";
import ClosedCard from "./ClosedCard";
import styled from "styled-components";

const ClosedTickets = () => {
  return (
    <ListCard>
      <ClosedCard />
    </ListCard>
  );
};

const ListCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ClosedTickets;
