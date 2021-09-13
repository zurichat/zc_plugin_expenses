import React from "react";
export default function ItemTable() {
    return (
        <div className="items">
            <div className="form-group">
                <p class="font-weight-bold display-4">Items</p>
            </div>
            <div className="itemList">
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <input
                            type="item"
                            readonly
                            className="form-control-plaintext font-weight-bold"
                            id="itemName"
                            value="Item Name"
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <input
                            type="item"
                            readonly
                            className="form-control-plaintext font-weight-bold"
                            id="itemPrice"
                            value="Item Unit Price"
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <input
                            type="item"
                            readonly
                            className="form-control-plaintext font-weight-bold"
                            id="itemQty"
                            value="Item Qty"
                        />
                    </div>
                </div>
            </div>
            <div className="itemList">
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <input
                            type="item"
                            readonly
                            className="form-control-plaintext lead"
                            id="itemName"
                            placeholder="Item Name"
                            value="Bread"
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <input
                            type="item"
                            readonly
                            className="form-control-plaintext lead"
                            id="itemName"
                            placeholder="Item Price"
                            value="250"
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <input
                            type="number"
                            readonly
                            className="form-control-plaintext lead"
                            id="itemName"
                            placeholder="Item Qty"
                            value="4"
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <input
                            type="item"
                            readonly
                            className="form-control-plaintext lead"
                            id="itemName"
                            placeholder="Item Name"
                            value="Beer"
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <input
                            type="item"
                            readonly
                            className="form-control-plaintext lead"
                            id="itemName"
                            placeholder="Item Price"
                            value="500"
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <input
                            type="number"
                            readonly
                            className="form-control-plaintext lead"
                            id="itemName"
                            placeholder="Item Qty"
                            value="2"
                        />
                    </div>
                </div>
            </div>
            <div className="form-group text-center">
                <p>
                    Total : <span className="total lead">2000</span>
                </p>
            </div>
        </div>
    );
}
