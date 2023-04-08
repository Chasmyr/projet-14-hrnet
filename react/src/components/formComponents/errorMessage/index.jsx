import React, { useState } from "react";
import "./index.css";

const ErrorMessage = ({ message, visible, setVisible }) => {

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className="error-message-container">
          <p className="error-message-text">{message}</p>
          <button className="error-message-close" onClick={handleClose}>
            x
          </button>
        </div>
      )}
    </>
  );
};

export default ErrorMessage;
