import React from "react";
export default function ViewNav() {
    return (
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
    );
}
