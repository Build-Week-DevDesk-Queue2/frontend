import React from "react";
import styled from "styled-components";
import "./studentqueue.css";
import StudentQueue from "../que/StudentQueue";

const StudentSuccessPage = () => {
  return (
    <BackgroundWrap>
      <h1>My Queue</h1>
      <StudentQueue />
    </BackgroundWrap>
  );
};

export default StudentSuccessPage;

const BackgroundWrap = styled.div`
  background: #fff;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -430px;
  margin-left: -600px;
  width: 960px;
  padding: 30px 130px 10px 120px;
`;
