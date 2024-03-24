// Modal.js

import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-container">
      <span onClick={onClose} className="close">X</span>
      <div className="modal">{children}</div>
    </div>
  );
};

export default Modal;
