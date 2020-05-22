import React from "react";
import styled from "styled-components";
import "./studentqueue.css";
import StudentQueue from "../que/StudentQueue";

const StudentSuccessPage = () => {
  return (
    <BackgroundWrap>
      <MyQueue>My Queue</MyQueue>
      <StudentQueue />
    </BackgroundWrap>
  );
};

export default StudentSuccessPage;

const BackgroundWrap = styled.div`
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -430px;
  margin-left: -600px;
  width: 960px;
  padding: 30px 130px 0px 120px;
`;

const MyQueue = styled.h1`
  background: #fff;
  padding-top: 5%;
`;
