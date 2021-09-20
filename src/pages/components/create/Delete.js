/* eslint-disable prettier/prettier */
import React from "react";
const Delete = ({ id, remove }) => {
    return (
        <div
            className="modal fade"
            id="deleteModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Are you sure you want to delete?
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
                            <div className="d-flex justify-content-center">
                                <button
                                    className="btn btn-sm btn-bg-secondary mr-2"
                                    type="button"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    No keep it
                                </button>
                                <button
                                    className="btn btn-sm btn-danger ml-2"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        remove(id);
                                    }}
                                >
                                    Yes delete Item
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delete;
