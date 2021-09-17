import React from "react";
import { AddButton } from "./AddnEditItem/AddButton";
import { AddHeader } from "./AddnEditItem/AddHeader";
import { ItemName } from "./AddnEditItem/ItemName";
import { Price } from "./AddnEditItem/Price";
import { Quantity } from "./AddnEditItem/Quantity";

function AddItem() {
    return (
        <div className="add-popup">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>
                    x
                </span>
                <AddHeader />
                <ItemName />
                <Price />
                <Quantity />
                <AddButton />
            </div>
        </div>
    );
}

export default AddItem;
