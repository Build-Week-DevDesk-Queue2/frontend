import React, { useEffect } from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import styled from "styled-components";
import "../users/createuser.css";

const SuccessMessage = () => {
  let role = "helper";

  return (
    <div className="success-message">
      <Toast>
        <ToastHeader>Success!</ToastHeader>
        <ToastBody>You have successfully logged in as a {role}</ToastBody>
      </Toast>
    </div>
  );
};

export default SuccessMessage;
