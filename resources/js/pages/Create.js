import React, { useState } from 'react';
import Add from './components/create/Add'
import Delete from './components/create/Delete';
import { Link } from 'react-router-dom';
import {Redirect} from "react-router-dom";

const Create =({author_id,author_name}) => {
    var showError=false;
    const[title,setTitle] =useState("")
    const[description,setDescription] = useState("")
    const [items, setItems] = useState([]);
    const [modalData, setModalData] = useState({
        id: -1,
        name: "",
        price: "",
        qty: "",
        opened: false
    })

    const [modalDeleteData, setModalDeleteData] = useState(-1)

    const showModal = (id = -1, name = "", price = "", qty = "") => {
        setModalData({
            id: id,
            name: name,
            price: price,
            qty: qty,
            opened: true,
        })
        $("#addEditModal").modal("show");
    }
    const closeModal = () => {
        setModalData({ ...modalData, opened: false })
        $("#addEditModal").modal("hide");
    }

    const closeDeleteModal = () => {
        setModalDeleteData(-1)
        $("#deleteModal").modal("hide");
    }

    const showDeleteModal = (id) => {
        setModalDeleteData(id)
        $("#deleteModal").modal("show");
    }

    const deleteItem = id => {
        setItems(items.filter(item => item.id != id));
        closeDeleteModal()
    }

    const addItem = (name, price, qty) => {
        let newitems = [...items, {
            id: items.length + 1,
            name: name,
            price: price,
            quantity: qty
        }]
        setItems(newitems)
        
    }

    const editItem = (id, name, price, qty) => {
        setItems(items.map(item => (item.id == id) ?
            {
                id: item.id,
                name: name,
                price: price,
                quantity: qty
            } :
            item))
    }

    const morphItems = (id, name, price, qty) => {
        (id == -1) ? addItem(name, price, qty) : editItem(id, name, price, qty)
        closeModal()
    }

    const createlist =()=>{
        axios.post(url,{
            "title" : title,
            "author_id" : author_id,//"613d3e65e4010959c8dc0c11",
            "author_name" :author_name, //"Mary Mark",
            "description" :description,
            "items":items
        },{
        headers: {
            "Plugin-id" :"613ba9de41f5856617552f51",
            "Organization-id" :"6133c5a68006324323416896",
            "room-id" : "6133c5a68006324323416896"
        }
        })
        .then(response => {
            showError=false;
            <Redirect to="/" />
            
        })
        .catch(error => {
            showError=true;
        })  
    }
    return (
        <div>
            <nav className="navbar" style={{backgroundColor:"#00B87C", color:"white"}}>
                <Link to="/expenses" className="navbar-brand text-white">Expenses</Link>
            </nav>
            {showError?
                <div className="alert alert-danger" role="alert">
                    Opps An error occured while submitting!
                </div>:null
            }
            <div className="container-fluid">
                <div className="row">
                    <main role="main" className="col-12 col-md-12  col-lg-12 px-5 pt-5">
                        <form>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group">
                                        <label><strong>Title</strong></label>
                                        <input type="text" name="name" className="form-control" placeholder="Enter Expenses Title" value={title} onChange={e=>setTitle(e.target.value)} />
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group">
                                        <label><strong>Description</strong></label>
                                        <textarea placeholder="Enter Info Here" className="form-control" id="exampleFormControlTextarea1" rows="5" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <label><p>Items</p></label>
                                    <div className="table-responsive text-left">
                                        <table className="table table-md">
                                            <thead>
                                                <tr>
                                                    <th>NAME</th>
                                                    <th>PRICE</th>
                                                    <th>QUANTITY</th>
                                                    <th>ACTIONS</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {   
                                                    items.map((item) => (
                                                        <tr key={item.id}>
                                                            <td style={{ textTransform: "capitalize" }}>{item.name}</td>
                                                            <td>{`₦${item.price}`}</td>
                                                            <td>{item.quantity}</td>
                                                            <td>
                                                                <button type="button" className="btn btn-link text-primary mx-1" onClick={() => {showModal(item.id, item.name, item.price, item.quantity); }} ><i className="far fa-edit"></i></button>
                                                                <button type="button" className="btn btn-link text-danger mx-1" onClick={() => showDeleteModal(item.id)}><i className="far fa-trash-alt"></i></button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }


                                            </tbody>
                                        </table>
                                        <button type="button" className="btn btn-link text-primary" onClick={() => showModal()}><i className="far fa-plus-square mr-2"></i>Add items</button>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 d-flex justify-content-end">
                                    <div className="form-group">
                                        <button type="button" className="btn btn-success" onChange={()=>{createlist()}}>Submit Request</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
            <Add id={modalData.id} name={modalData.name} price={modalData.price} quantity={modalData.qty} submit={morphItems} />
            <Delete id={modalDeleteData} remove={deleteItem}/>
        </div >
    )
}

export default Create

