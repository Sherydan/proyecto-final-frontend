import React, { useState } from "react";
import ModalSendFile from "./ModalSendFile";

const ModalContainer = () => {
const [isOpen, setIsOpen ]= useState(false)

const handleOpenModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
}

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
         Add Sales
      </button>
      
        {/* <ModalSendFile handleOpenModal={handleOpenModal}/> */}
    </>
  );
};

export default ModalContainer;
