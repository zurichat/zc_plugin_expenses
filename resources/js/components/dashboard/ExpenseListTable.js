import React from 'react';

function ExpenseListTable(props) {
    return (
        <tr>
            <td>{props.expense.date}</td>
            <td>{props.expense.name}</td>
            <td>{props.expense.title}</td>
            <td>N{props.expense.amount}</td>
            <td className="text-success">Approved</td>
            <td><a href="#" className="btn-link">View Details</a></td>
        </tr>
    );
}

export default ExpenseListTable;