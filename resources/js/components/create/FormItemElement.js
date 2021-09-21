import React from "react";
export default function FormItemElement(props) {
    return (
        <div className="items">
            <div className="form-group">
                <p>Items</p>
            </div>
            <div className="itemList">
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input
                            type="item"
                            className="form-control"
                            id="itemName"
                            placeholder="Item Name"
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <input
                            type="item"
                            className="form-control"
                            id="itemName"
                            placeholder="Item Price"
                        />
                    </div>
                    <div className="form-group col-md-2">
                        <input
                            type="number"
                            className="form-control"
                            id="itemName"
                            placeholder="Item Qty"
                            value="1"
                        />
                    </div>
                    <div className="form-group col-md-2 float-right">
                        <button
                            className="btn btn-outline-danger"
                            type="button"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <div className="form-row ">
                <div className="form-group col-md-6 text-right">
                    <button className="btn btn-outline-info" type="button">
                        Add Item
                    </button>
                </div>
                <div className="form-group col-md-5 text-left">
                    <p>
                        Total : <span className="total">0</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
