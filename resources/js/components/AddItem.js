import React, { useRef } from "react";
import { AddButton } from "./AddnEditItem/AddButton";
import { AddHeader } from "./AddnEditItem/AddHeader";
import { ItemName } from "./AddnEditItem/ItemName";
import { Price } from "./AddnEditItem/Price";
import { Quantity } from "./AddnEditItem/Quantity";
import "./AddnEditItem/addEdit.css"

export const AddItem = ({ setShowModal }) => {

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
                    <AddHeader />
                    <a className="close-icon" onClick={() => setShowModal(false)}>
                        X
                    </a>
                </div>
                <ItemName />
                <Price />
                <Quantity />
                <AddButton />
            </div>
        </div>
    );
}