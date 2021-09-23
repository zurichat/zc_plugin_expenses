/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import Comment from "./components/view/Comment"
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const View = ({ userdata, expense }) => {
    const [showError, setShowError] = useState(false)
    
    const showResponseModal = () => {
        $("#commentModal").modal("show");
    };
    
    const submitResponse = (status,comment="") => {
        axios
            .put(
                `url/${expense._id}`,

                {  
                    list_status: status,
                    status: status,
                    admin_comment: comment,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Plugin-id": userdata.plugin_id,
                        "Organization-id": userdata.organization_id,
                        "Room-id": userdata.room_id,
                    },
                }
            )
            .then((response) => {
                setShowError(false);
                setUrl(url);
                <Redirect to="/expenses/" />;
            })
            .catch((error) => {
                setShowError(true);
            });
    };
    return (
        <div className="container-fluid">
            <nav
                className="navbar"
                style={{ backgroundColor: "#00B87C", color: "white" }}
            >
                <Link to="/" className="navbar-brand text-white">
                    Expenses
                </Link>
            </nav>
            {showError ? (
                <div className="alert alert-danger my-2" role="alert">
                    Opps An error occured while submitting!
                </div>
            ) : null}
            <div className="container-fluid">
                <div className="row">
                    <main
                        role="main"
                        className="col-12 col-md-10  col-lg-8 px-3 pt-3 mx-auto"
                    >
                        <form>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="title">
                                            <strong>Title</strong>
                                        </label>
                                        <input
                                            readOnly
                                            type="text"
                                            name="title"
                                            className="form-control-plaintext"
                                            value={expense.title}
                                        />
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="description">
                                            <strong>Description</strong>
                                        </label>
                                        <textarea
                                            readOnly
                                            className="form-control-plaintext"
                                            id="exampleFormControlTextarea1"
                                            rows="4"
                                            value={expense.description}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <label htmlFor="items">
                                        <p>Items</p>
                                    </label>
                                    <div className="table-responsive text-left">
                                        <table className="table table-md">
                                            <thead>
                                                <tr>
                                                    <th>S/N</th>
                                                    <th>NAME</th>
                                                    <th>PRICE</th>
                                                    <th>QUANTITY</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {items.map((item, index) => (
                                                    <tr key={item.id}>
                                                        <td>{index+1}</td>
                                                        <td
                                                            style={{
                                                                textTransform:
                                                                    "capitalize",
                                                            }}
                                                        >
                                                            {item.name}
                                                        </td>
                                                        <td>{`₦${item.price}`}</td>
                                                        <td>{item.quantity}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 my-2 col-md-12 d-flex justify-content-end">
                                    <div className="btn-group">
                                        <button
                                            type="button"
                                            className="btn btn-outline-success mx-2"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                submitResponse("approve")
                                            }}
                                        >
                                            Approve
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger mx-2"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                showResponseModal("decline")
                                            }}
                                        >
                                            Decline
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
            <Comment
                submit={submitResponse}
            />
        </div>
    );
};

export default View;
