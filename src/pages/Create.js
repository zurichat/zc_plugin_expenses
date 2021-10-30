/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import Add from "./components/create/Add";
import Delete from "./components/create/Delete";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";

const Create = ({ userdata, url, setUrl }) => {
    const [redirect, setRedirect] =useState(false)
    const [showError, setShowError] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [items, setItems] = useState([]);
    const [modalData, setModalData] = useState({
        id: -1,
        name: "",
        unit_price: "",
        qty: "",
        opened: false,
    });

    const [modalDeleteData, setModalDeleteData] = useState(-1);

    const showModal = (id = -1, name = "", unit_price = "", qty = "") => {
        setModalData({
            id: id,
            name: name,
            unit_price: unit_price,
            qty: qty,
            opened: true,
        });
        $("#addEditModal").modal("show");
    };
    const closeModal = () => {
        setModalData({ ...modalData, opened: false });
        $("#addEditModal").modal("hide");
    };

    const closeDeleteModal = () => {
        setModalDeleteData(-1);
        $("#deleteModal").modal("hide");
    };

    const showDeleteModal = (id) => {
        setModalDeleteData(id);
        $("#deleteModal").modal("show");
    };

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id != id));
        closeDeleteModal();
    };

    const addItem = (name, unit_price, qty) => {
        let newitems = [
            ...items,
            {
                id: items.length + 1,
                name: name,
                unit_price: unit_price,
                quantity: qty,
            },
        ];
        setItems(newitems);
    };

    const editItem = (id, name, unit_price, qty) => {
        setItems(
            items.map((item) =>
                item.id == id
                    ? {
                          id: item.id,
                          name: name,
                          unit_price: unit_price,
                          quantity: qty,
                      }
                    : item
            )
        );
    };

    const morphItems = (id, name, unit_price, qty) => {
        id == -1 ? addItem(name, unit_price, qty) : editItem(id, name, unit_price, qty);
        closeModal();
    };
    const createlist = () => {
        axios
            .post(
                url,

                {  
                    title: title,
                    author_id: userdata.id,
                    author_name: userdata.name,
                    description: description,
                    items: items,
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
                setRedirect(true)
                setUrl(url);
            })
            .catch((error) => {
                setShowError(true);
            });
    };
    if(redirect){
        return <Redirect to="/expenses" />;
    }
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
                                            type="text"
                                            name="title"
                                            className="form-control"
                                            placeholder="Enter Expenses Title"
                                            value={title}
                                            onChange={(e) =>
                                                setTitle(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="description">
                                            <strong>Description</strong>
                                        </label>
                                        <textarea
                                            placeholder="Enter Info Here"
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="5"
                                            value={description}
                                            onChange={(e) =>
                                                setDescription(e.target.value)
                                            }
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
                                                    <th>NAME</th>
                                                    <th>unit_price</th>
                                                    <th>QUANTITY</th>
                                                    <th>ACTIONS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {items.map((item) => (
                                                    <tr key={item.id}>
                                                        <td
                                                            style={{
                                                                textTransform:
                                                                    "capitalize",
                                                            }}
                                                        >
                                                            {item.name}
                                                        </td>
                                                        <td>{`₦${item.unit_price}`}</td>
                                                        <td>{item.quantity}</td>
                                                        <td>
                                                            <button
                                                                type="button"
                                                                className="btn btn-link text-primary mx-1"
                                                                onClick={() => {
                                                                    showModal(
                                                                        item.id,
                                                                        item.name,
                                                                        item.unit_price,
                                                                        item.quantity
                                                                    );
                                                                }}
                                                            >
                                                                <i className="far fa-edit"></i>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-link text-danger mx-1"
                                                                onClick={() =>
                                                                    showDeleteModal(
                                                                        item.id
                                                                    )
                                                                }
                                                            >
                                                                <i className="far fa-trash-alt"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <button
                                            type="button"
                                            className="btn btn-link text-primary"
                                            onClick={() => showModal()}
                                        >
                                            <i className="far fa-plus-square mr-2"></i>
                                            Add items
                                        </button>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 d-flex justify-content-end">
                                    <div className="btn-group">
                                        <Link
                                            className="btn btn-warning mx-2"
                                            to="/"
                                        >
                                            Cancel
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn btn-success mx-2"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                createlist();
                                            }}
                                        >
                                            Submit Request
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
            <Add
                id={modalData.id}
                name={modalData.name}
                price={modalData.unit_price}
                quantity={modalData.qty}
                submit={morphItems}
            />
            <Delete id={modalDeleteData} remove={deleteItem} />
        </div>
    );
};

export default Create;
