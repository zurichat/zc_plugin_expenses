import React from "react";
import { EditButton } from "./AddnEditItem/AddButton";
import { EditHeader } from "./AddnEditItem/AddHeader";
import { ItemName } from "./AddnEditItem/ItemName";
import { Price } from "./AddnEditItem/Price";
import { Quantity } from "./AddnEditItem/Quantity";

function EditItem() {
    return (
        <div className="edit-popup">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>
                    x
                </span>
                <EditHeader />
                <ItemName />
                <Price />
                <Quantity />
                <EditButton />
            </div>
        </div>
    );
}

export default EditItem;
