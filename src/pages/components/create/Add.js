/* eslint-disable prettier/prettier */
import React, { useState } from "react"
function Add({ id, name, price, quantity, submit }) {
    const [fname, setFname] = useState(name);
    const [fprice, setFprice] = useState(price);
    const [fquantity, setFquantity] = useState(quantity);
    return (
        <div
            className="modal fade"
            id="addEditModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            {id == -1 ? "Add" : "Edit"}
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <form>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="itemName">
                                            <strong>Item Name</strong>
                                        </label>
                                        <input
                                            name="itemName"
                                            id="itemName"
                                            className="form-control"
                                            placeholder="Item Name"
                                            value={fname}
                                            onChange={(e) =>
                                                setFname(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="price">
                                            <strong>Price</strong>
                                        </label>
                                        <input
                                            name="Price"
                                            type="nunber"
                                            className="form-control"
                                            placeholder="Price"
                                            value={fprice}
                                            onChange={(e) =>
                                                setFprice(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="quantity">
                                            <strong>Quantity</strong>
                                        </label>
                                        <input
                                            name="Quantity"
                                            type="nunber"
                                            className="form-control"
                                            placeholder="Quantity"
                                            value={fquantity}
                                            onChange={(e) =>
                                                setFquantity(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer d-flex justify-content-end">
                        <button
                            type="button"
                            className="btn btn-sm btn-success"
                            onClick={(e) => {
                                e.preventDefault();
                                submit(id, fname, fprice, fquantity);
                            }}
                        >
                            {id == -1 ? "Add" : "Save Changes"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Add;
