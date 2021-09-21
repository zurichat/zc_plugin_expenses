import React from "react";

function ExpenseListTable({ expenseList }) {
    return (
        <>
            <div className="container-fluid mb-3 bg-light">
                <div className="row text-center table-responsive-md">
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
        </>
    );
}

export default ExpenseListTable;
