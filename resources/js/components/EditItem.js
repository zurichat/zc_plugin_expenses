import React, { useRef } from "react";
import { EditButton } from "./AddnEditItem/EditButton";
import { EditHeader } from "./AddnEditItem/EditHeader";
import { ItemName } from "./AddnEditItem/ItemName";
import { Price } from "./AddnEditItem/Price";
import { Quantity } from "./AddnEditItem/Quantity";
import "./AddnEditItem/addEdit.css"

export const EditItem = ({ setShowModal }) => {

    // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

    return (
        <div className="add-popup" ref={modalRef} onClick={closeModal}>
            <div className="aebox">
                <div>
                    <EditHeader />
                    <a className="close-icon" onClick={() => setShowModal(false)}>
                        X
                    </a>
                </div>
                <ItemName />
                <Price />
                <Quantity />
                <EditButton />
            </div>
        </div>
    );
}