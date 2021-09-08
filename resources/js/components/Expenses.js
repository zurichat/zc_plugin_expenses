import React from "react";

// @patutechz issue #51
export default function Expenses() {
    return (
        <div>
            <div className="container-fluid mb-3 bg-light ">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center pt-3 pb-1">
                        <h4 className="text-uppercase">Expenses</h4>
                        <a href="/list/create" className="text-primary">
                            <i className="fas fa-plus"></i>{" "}
                            <span className="ml-2">Add new list</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-1 mb-3">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center text-secondary">
                        <div>
                            <span>View all</span>
                            <i className="fas fa-angle-down ml-2"></i>
                        </div>
                        <div>
                            <i className="fas fa-sort-alpha-down"></i>{" "}
                            <span className="ml-2">Sort by</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mb-3 bg-light">
                <div className="row text-center">
                    <table className="table">
                        <tbody className="table-head">
                            <tr>
                                <td>DATE</td>
                                <td>AUTHOR</td>
                                <td>TITLE</td>
                                <td>PRICE</td>
                                <td>STATUS</td>
                                <td>DETAILS</td>
                            </tr>
                        </tbody>
                        <tbody className="bg-light">
                            <tr>
                                <td>02/09/21</td>
                                <td>Jerry Mbam</td>
                                <td>Travel</td>
                                <td>N3,000</td>
                                <td>Approved</td>
                                <td>
                                    <a href="list/1" className="btn-link">
                                        View Details
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>02/09/21</td>
                                <td>Jerry Mbam</td>
                                <td>Travel</td>
                                <td>N3,000</td>
                                <td>Approved</td>
                                <td>
                                    <a href="list/1" className="btn-link">
                                        View Details
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>02/09/21</td>
                                <td>Jerry Mbam</td>
                                <td>Travel</td>
                                <td>N3,000</td>
                                <td>Approved</td>
                                <td>
                                    <a href="list/1" className="btn-link">
                                        View Details
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>02/09/21</td>
                                <td>Jerry Mbam</td>
                                <td>Travel</td>
                                <td>N3,000</td>
                                <td>Approved</td>
                                <td>
                                    <a href="list/1" className="btn-link">
                                        View Details
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>02/09/21</td>
                                <td>Jerry Mbam</td>
                                <td>Travel</td>
                                <td>N3,000</td>
                                <td>Approved</td>
                                <td>
                                    <a href="list/1" className="btn-link">
                                        View Details
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
// @patutechz issue #51
