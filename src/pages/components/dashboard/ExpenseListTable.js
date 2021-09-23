/* eslint-disable prettier/prettier */
import React,{useState} from "react";
import ExpenseList from "./ExpenseList";
// import Error from "./Error";
import Empty from "./Empty";
import View from "./View";
const ExpenseListTable = ({ error, expenseLists, userdata }) => {
    const [viewExpense,setViewExpense] = useState(null);
    const showList = (expense)=>{
        setViewExpense(expense);
        // eslint-disable-next-line no-undef
        $("#viewModal").modal("show");
    }
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
                                      userdata={userdata}
                                      showList={showList}
                                  />
                              ))}
                    </tbody>
                </table>
            </div>
            {error ? <Empty /> : expenseLists == null ? <Empty /> : null}

            <View expense={viewExpense} />
        </>
    );
};

export default ExpenseListTable;
