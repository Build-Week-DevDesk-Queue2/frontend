import React from "react";
import styled from "styled-components";
import css from "../users/createuser.css";

const ClosedCard = () => {
  return (
    <ClosedTicketWrap>
      <div className="closed-ticket-box-style">
        <ClosedTicketTitle>Laptop stopped working</ClosedTicketTitle>
        <TicketStatus>Closed</TicketStatus>
      </div>
    </ClosedTicketWrap>
  );
};

const ClosedTicketWrap = styled.div`
  background: #fff;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: 80px;
  margin-left: -178px;
  width: 343px;
`;

const ClosedTicketTitle = styled.h3`
  padding-left: 5px;
  text-align: left;
`;

const TicketStatus = styled.p`
  text-align: right;
  padding-right: 5px;
  font-size: 16px;
  line-height: 20px;
  width: 50px;
  margin: 0;
`;
export default ClosedCard;
