import React from "react";
import ModalSendFile from "./ModalSendFile";

const ModalContainer = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary nav-link text-white"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <i
          className="fa-solid fa-file-circle-plus me-2"
          style={{ color: " #ffffff" }}
        ></i>
        <span></span> Add Sales
      </button>
      <ModalSendFile />
    </>
  );
};

export default ModalContainer;
