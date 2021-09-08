import React from "react";
import ReactDOM from "react-dom";
// import Expenses from './Expenses';

function Index() {
    return (
        <>
            <div className="container-fluid mb-3 bg-light ">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center pt-3 pb-1">
                        <h4 className="text-uppercase">Expenses | View</h4>
                        <a href="/" className="text-primary">
                            <i className="fa fa-arrow-left"></i>{" "}
                            <span className="ml-2">Back</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-fluid mb-6">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 p-0 m-0">
                        <div className="card rounded-0">
                            <div className="card-header custom-card-header py-3">
                                View Expense List
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label
                                            class="font-weight-bold display-4"
                                            htmlFor="title"
                                        >
                                            Title
                                        </label>
                                        <input
                                            readonly
                                            type="text"
                                            className="form-control-plaintext lead"
                                            id="title"
                                            placeholder="Expense Title"
                                            value="Feeding Expense"
                                        />
                                    </div>
                                    <div className="items">
                                        <div className="form-group">
                                            <p class="font-weight-bold display-4">
                                                Items
                                            </p>
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
                                                Total :{" "}
                                                <span className="total lead">
                                                    2000
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label
                                            class="font-weight-bold display-4"
                                            htmlFor="title"
                                        >
                                            Status
                                        </label>
                                        <input
                                            readonly
                                            type="text"
                                            className="form-control-plaintext text-success lead"
                                            id="title"
                                            placeholder="Expense Title"
                                            value="Approved"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label
                                            for="description"
                                            class="font-weight-bold display-4"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            readonly
                                            className="form-control-plaintext lead"
                                            id="description"
                                            rows="4"
                                            placeholder="Description"
                                        >
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Voluptatum laborum, atque quod
                                            commodi reprehenderit vel culpa
                                            excepturi, magni cumque eligendi
                                            doloribus beatae itaque! Animi
                                            fugiat rem totam nulla voluptatem
                                            et?
                                        </textarea>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <a
                                                href="/"
                                                className="btn btn-outline-success"
                                            >
                                                Back
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;

if (document.getElementById("view")) {
    ReactDOM.render(<Index />, document.getElementById("view"));
}
