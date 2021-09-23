/* eslint-disable prettier/prettier */
import React from "react";
import { Link } from "react-router-dom";
function ExpenseList({ expense, userdata, showList }) {
    return (
        <tr>
            <td style={{ textTransform: "capitalize" }}>
                {new Date(expense.created_at * 1000).toLocaleDateString()}
            </td>
            <td style={{ textTransform: "capitalize" }}>
                {expense.author_name}
            </td>
            <td style={{ textTransform: "capitalize" }}>{expense.title}</td>
            <td
                style={{ textTransform: "capitalize" }}
            >{`₦${expense.total}`}</td>
            <td
                style={{ textTransform: "capitalize" }}
                className={color(expense.status)}
            >
                {expense.status}
            </td>
            <td style={{ textTransform: "capitalize" }}>
                {
                userdata.isadmin ?
                <Link to={`/view`} className="btn-link">
                    View Details
                </Link>
                :
                <button type="button" className="btn btn-link" onClick={(e)=>{showList(expense)}}>
                    View Details
                </button>
                }
            </td>
        </tr>
    );
}

export default ExpenseList;

// Helper Functions

const color = (status) =>
    status == "approved"
        ? "text-success"
        : status == "pending"
        ? "text-muted"
        : "text-danger";
