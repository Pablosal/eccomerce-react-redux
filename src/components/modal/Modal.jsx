import React from "react";
import "./Modal.css";
import ReactDOM from "react-dom";
const Modal = ({ close }) => {
  return ReactDOM.createPortal(
    <div className="champion">
      <h1>Felicidades tus pedidos llegaran en 5 dias</h1>
      <h1 onClick={close}>X</h1>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
