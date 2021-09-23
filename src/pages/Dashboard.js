/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./components/dashboard/Loader";
import ExpenseListTable from "./components/dashboard/ExpenseListTable";
import { Link } from "react-router-dom";

function Dashboard({ expenses, userdata,setUrl,url }) {
    return (
        <div className="container-fluid">
            <nav className="navbar">
                <Link className="navbar-brand text-white" to="/">
                    Expenses
                </Link>
            </nav>

            <div className="container-fluid " onLoad={(e)=>setUrl(url)}>
                <div className="row">
                    <main
                        role="main"
                        className="col-12 col-md-12  col-lg-12 pt-3"
                    >
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
                        {expenses.loading ? (
                            <Loader />
                        ) : (
                            <ExpenseListTable
                                error={expenses.error}
                                expenseLists={expenses.data}
                                userdata={userdata}
                            />
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
