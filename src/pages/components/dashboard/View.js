/* eslint-disable prettier/prettier */
import React from "react";
import Loader from "./Loader";
const View = ({expense }) => {
    
    return (
        <div
            className="modal fade"
            id="viewModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="viewModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    
                    <div className="modal-header">
                        <h5 className="modal-title" id="viewModalLabel">
                            Expenses List
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
                    {expense == null ? <Loader/>:
                       
                    <>
                        <div className="modal-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="text-bold">Title</p>
                                    <p style={{ textTransform: "capitalize" }}>{expense.title}</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>{expense.author_name}</p>
                                        <p>{new Date(expense.created_at * 1000).toLocaleDateString()}</p>
                            </div>
                                {(expense.description == "" || expense.description == null)? null :
                                    <>
                                        <div className="form-group">
                                            <label htmlFor="description">Description</label>
                                            <textarea style={{ textTransform: "capitalize" }} readOnly className="form-control-plaintext" id="description" rows="2" value={expense.description}></textarea>
                                        </div>
                                    </>
                                    }
                            <hr/>
                            <div className="">
                                        <table className="table table-sm table-borderless">
                                            <thead>
                                                <tr>
                                                    <th className="text-center" scope="col">#</th>
                                                    <th className="text-center" scope="col">Item name</th>
                                                    <th className="text-center" scope="col">Unit price</th>
                                                    <th className="text-center" scope="col">Quantity</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {expense.items.map((item,index)=>(
                                                    <tr>
                                                        <th className="text-center" style={{textTransform:"capitalize"}}  scope="row">{index+1}</th>
                                                        <td className="text-center" style={{textTransform:"capitalize"}} >{item.name}</td>
                                                        <td className="text-center" style={{textTransform:"capitalize"}} >{item.unit_price}</td>
                                                        <td className="text-center" style={{textTransform:"capitalize"}} >{item.quantity}</td>
                                                    </tr>

                                                ))}
                                                
                                                                                                    
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                <th scope="row" className="text-center">Total</th>
                                                    <td></td>
                                                    <td colspan="2" className="text-center">₦{expense.total}</td>
                                                </tr>
                                            </tfoot>
                                        </table>

                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="ml-2 text-bold">Status</p>
                                    <p style={{ textTransform: "capitalize" }} className={`${color(expense.status)}  mr-3`} >{expense.status} </p>
                            </div>
                            
                            {expense.admin_comment==""?null:
                                <>
                                    <hr/>
                                    <div className="form-group">
                                        <label htmlFor="description" className="text-bold">Admin's Comment</label>
                                            <textarea style={{textTransform:"capitalize"}} readOnly className="form-control-plaintext" id="description" rows="2" value={expense.admin_comment}></textarea>
                                    </div>
                                </>
                            }
                        </div>
                        <div className="modal-footer d-flex justify-content-around">
                            <button className="btn btn-sm btn-link text-primary">
                                <i className="fas fa-download"></i> Export Receipt
                            </button>
                            <button className="btn btn-sm btn-link text-primary">
                                <i className="fas fa-file"></i> Receipt
                            </button>
                        </div>
                    </>
                        }
                </div>
            </div>
        </div>
    );
};

export default View;

const color = (status) =>
    status == ("approved"||"Aproved")
        ? "text-success"
        : status == ("pending" || "Pending")
            ? "text-muted"
            : "text-danger";
