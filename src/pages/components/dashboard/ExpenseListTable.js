/* eslint-disable prettier/prettier */
import React from "react";
import ExpenseList from "./ExpenseList";
// import Error from "./Error";
import Empty from "./Empty";
const ExpenseListTable = ({ error, expenseLists }) => {
    return (
        <>
            <div className="table-responsive text-left text-md-center bg-light">
                <table className="table table-hover ">
                    <thead className="bg-success text-white">
                        <tr>
                            <th>DATE</th>
                            <th>NAME</th>
                            <th>TITLE</th>
                            <th>PRICE</th>
                            <th>STATUS</th>
                            <th>DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {error || expenseLists == null
                            ? null
                            : expenseLists.map((expense) => (
                                  <ExpenseList
                                      key={expense._id}
                                      expense={expense}
                                  />
                              ))}
                    </tbody>
                </table>
            </div>
            {error ? <Empty /> : expenseLists == null ? <Empty /> : null}
        </>
    );
};

export default ExpenseListTable;
