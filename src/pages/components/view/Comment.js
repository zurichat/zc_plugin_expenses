/* eslint-disable prettier/prettier */
import React, {useState} from "react";

const Comment = ({submit}) => {
    const [fcomment,setFcomment] = useState("")
    return (
        <div>
            <div
                className="modal fade"
                id="commentModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Add Comment
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
                                                <strong>Comment</strong>
                                            </label>
                                            <textarea
                                                name="itemName"
                                                id="itemName"
                                                className="form-control"
                                                value={fcomment}
                                                onChange={(e) =>
                                                    setFcomment(e.target.value)
                                                }
                                                rows="5"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer d-flex justify-content-end">
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-md close btn-outline-warning mx-2"
                                    data-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-md btn-outline-success mx-2"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        submit("decline",fcomment);
                                    }}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;
