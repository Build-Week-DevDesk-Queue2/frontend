import React from "react";
import styled from "styled-components";
import "./studentqueue.css";
import StudentQueue from "../que/StudentQueue";

const Dashboard = () => {
  let role = "helper";

  return (
    <BackgroundWrap>
      <LogoutButton>LOGOUT</LogoutButton>
      <MyQueue>My Queue</MyQueue>
      <StudentQueue role={role} />
    </BackgroundWrap>
  );
};

export default Dashboard;

const BackgroundWrap = styled.div`
  border-radius: 10px;
  background: #f9fafc;
`;

const MyQueue = styled.h1`
  background: #fff;
  padding-top: 5%;
`;

const LogoutButton = styled.button`
  padding: 12px;
  margin: 15px;
  color: white;
  width: 85px;
  background-color: black;
`;
