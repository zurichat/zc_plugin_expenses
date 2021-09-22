/* eslint-disable prettier/prettier */
import React from "react";
import { Link } from "react-router-dom";

function ExpenseList({ expense }) {
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
                <Link to={`/View`} className="btn-link">
                    View Details
                </Link>
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
