import React, { useEffect, useState } from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import styled from "styled-components";
import "../users/createuser.css";

const SuccessMessage = (props) => {
  let role = "student";

  const [hide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setHide(true);
    }, props.timeout);
  });

  let className = "success-message";
  return (
    <div className={`${hide ? "hide" : null} ${className}`}>
      <Toast>
        <ToastHeader>Success!</ToastHeader>
        <ToastBody>You have successfully logged in as a {role}</ToastBody>
      </Toast>
    </div>
  );
};

export default SuccessMessage;
