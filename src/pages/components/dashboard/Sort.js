/* eslint-disable prettier/prettier */
import React from "react";

function Sort() {
    return (
        <>
            <div className="btn-group dropleft">
                <button
                    type="button"
                    className="btn btn-sm btn-link text-primary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <i className="fas fa-sort-alpha-down"></i>
                    Sort
                </button>
                <div className="dropdown-menu">
                    <button className="dropdown-item btn btn-link" >Action</button>
                    <button className="dropdown-item btn btn-link" >Another action</button>
                    <button className="dropdown-item btn btn-link" >Something else here</button>

                </div>
            </div>
        </>
    );
}

export default Sort;
