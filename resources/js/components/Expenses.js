// @patutechz issue #51
import React, {useState , useEffect} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Loader from './Loader';
import ExpenseTable from './dashboard/ExpenseListTable';

function Expenses() {
    const url = `api/v1/expenses`
    const [expenses, setExpenses] = useState({
        loading : false,
        data : null,
        error : false
    });

    let content = null;

    useEffect(() => {
        setExpenses({
            loading : true,
            data : null,
            error : false
        })

        Axios.get(url)
            .then(response => {
                setExpenses({
                    loading : false,
                    data : response.data.expenses.data,
                    error : false
                })
            })
            .catch(() => {
                setExpenses({
                    loading : false,
                    data : null,
                    error : true
                })
            })
    }, [url])


    if(expenses.error){
        content = 
        <>
        <div className="table-responsive text-left text-md-center bg-light">
            <table className="table table-hover table-sm">
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

        </tbody>
            </table>
          </div>
        <div className="d-flex justify-content-center align-items-center alert alert-danger w-full pt-2">
            <p className="">
                an error occured try again later
            </p>
        </div>
        </>
    }

    if(expenses.loading){
        content = <Loader />
    }

    if(expenses.data){
        content = 
        <div className="table-responsive text-left text-md-center bg-light">
            <table className="table table-hover table-sm">
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
             { expenses.data.map((expense, key) => 
            
                <ExpenseTable key={key} 
                    expense={expense}
                /> 
        )}
        </tbody>
            </table>
          </div>
    }    

    return (
        <div className="container-fluid">
            <nav className="navbar">
                <a className="navbar-brand text-white" href="#">Expenses</a>
            </nav>
            
            <div className="container-fluid ">
              <div className="row">
                  <main role="main" className="col-12 col-md-12  col-lg-12 pt-3">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-1">
                        <button className="btn btn-sm btn-outline-primary">
                          <i className="fas fa-plus"></i>
                          Add New List
                        </button>
                        <div className="btn-toolbar mb-2 mb-md-0">
                          <button className="btn btn-sm btn-link text-primary">
                            <i className="fas fa-sort-alpha-down"></i>
                            Sort by
                          </button>
                        </div>
                    </div>
                    {content}
                  </main>
              </div>
            </div>
        </div>
    );
}

export default Expenses;

// @patutechz issue #51
