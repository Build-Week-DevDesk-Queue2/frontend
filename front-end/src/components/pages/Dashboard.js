import React from "react";
import styled from "styled-components";
import "./studentqueue.css";
import StudentQueue from "../que/StudentQueue";
import { connect } from 'react-redux';
import { logOut } from '../../actions/actions';

const mapStateToProps = state => {
  console.log(state);
  return {
    user: {
      id: state.user.id,
      username: state.user.username,
      role: state.user.role
    },
    logged_in: state.logged_in
  }
}

const Dashboard = props => {
  let role = props.user.role;

  const logout = () => {
    props.logOut();
    props.history.push('/');
  }

  return (
    <BackgroundWrap>
      <LogoutButton onClick={logout}>LOGOUT</LogoutButton>
      <p>{role}</p>
      <MyQueue>My Queue</MyQueue>
      <StudentQueue role={role} />
    </BackgroundWrap>
  );
};

export default connect(mapStateToProps, {logOut})(Dashboard);

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
