// @patutechz issue #51
import React, {useState , useEffect} from 'react';
import axios from 'axios';
import Loader from './components/dashboard/Loader';
import ExpenseListTable from './components/dashboard/ExpenseListTable';
import { Link } from 'react-router-dom';


function Dashboard() {
    const url = `${window.location.origin}/api/v1/expenses`
    console.log(url);
    const [expenses, setExpenses] = useState({
        loading : false,
        data : null,
        error : false
    });


    useEffect(() => {
        setExpenses({
            loading : true,
            data : null,
            error : false
        })

        axios.get(url,{
            headers: {
              "plugin_id" :"613ba9de41f5856617552f51",
              "organization_id" :"6133c5a68006324323416896",
              "room_id" : "6133c5a68006324323416896"
            }
            })
            .then(response => {
              console.log(response.data.data.data)
                setExpenses({
                    loading : false,
                    data : response.data.data.data,
                    error : false
                })
            })
            .catch(error => {
                 console.log(error);
                setExpenses({
                    loading : false,
                    data : null,
                    error : true
                })
            })
    }, [url])

    return (
          <div className="container-fluid">
              <nav className="navbar">
                <Link className="navbar-brand text-white" to="/">Expenses</Link>
              </nav>
              
              <div className="container-fluid ">
                <div className="row">
                    <main role="main" className="col-12 col-md-12  col-lg-12 pt-3">
                      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-1">
                          <Link to="/create">
                            <button className="btn btn-sm btn-outline-primary">
                              <i className="fas fa-plus"></i>
                              Add New List
                            </button>
                          </Link>
                          
                          <div className="btn-toolbar mb-2 mb-md-0">
                            <button className="btn btn-sm btn-link text-primary">
                              <i className="fas fa-sort-alpha-down"></i>
                              Sort by
                            </button>
                          </div>
                      </div>
                      {expenses.loading?<Loader />:<ExpenseListTable error={expenses.error} expenseLists={expenses.data} />}
                    </main>
                </div>
              </div>
          </div>
    );
}

export default Dashboard;

