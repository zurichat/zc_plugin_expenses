/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import View from "./pages/View";
import Admin from "./pages/Admin";
import axios from "axios";
import "./css/app.css";
import "./css/style.css";
function Root() {
    const [userdata, setUserdata] = useState({
        id: "613d3e65e4010959c8dc0c11",
        name: "Sally Jane",
        room_id: "6133c5a68006324323416896",
        plugin_id: "613ba9de41f5856617552f51",
        organization_id: "6133c5a68006324323416896",
        isadmin: false,
    });

    const [url, setUrl] = useState(`https://expenses.zuri.chat/api/v1/expenses`);
    
    const [expenses, setExpenses] = useState({
        loading: false,
        data: null,
        error: false,
        approved: 0,
        declined: 0,
        pending: 0,
    });
    
    useEffect(() => {
        setExpenses({
            loading: true,
            data: null,
            error: false,
        });

        axios
            .get(url, {
                headers: {
                    "Plugin-id": userdata.plugin_id,
                    "Organization-id": userdata.organization_id,
                    "room-id": userdata.room_id,
                },
            })
            .then((response) => {
                setExpenses({
                    loading: false,
                    data: response.data.data.data.sort((a, b) => b.created_at - a.created_at),
                    error: false,
                    approved:this.data ?this.data.filter(expense=> expense.status=="approved").length:0,
                    declined: this.data ? this.data.filter(expense => expense.status == "declined").length : 0,
                    pending: this.data ? this.data.filter(expense => expense.status == "pending").length : 0,
                });
            })
            .catch((error) => {
                setExpenses({
                    loading: false,
                    data: null,
                    error: true,
                    approved: 0,
                    declined: 0,
                    pending: 0
                });
            });
    }, [url, userdata.organization_id, userdata.plugin_id, userdata.room_id,userdata.isadmin]);
    return (
        <Router basename="/expenses">
            <Switch>
                <Route path="/create">
                    <Create userdata={userdata} url={url} setUrl={setUrl} />
                </Route>
                <Route path="/view">
                    <View userdata={userdata} />
                </Route>
                <Route path="/admin">
                    <Admin
                        expenses={expenses}
                        userdata={userdata}
                        url={url}
                        setUrl={setUrl}
                    />
                </Route>
                <Route path="/">
                    <Dashboard
                        expenses={expenses}
                        setExpenses={setExpenses}
                        userdata={userdata}
                        url={url}
                        setUrl={setUrl}
                    />
                </Route>
            </Switch>
        </Router>
    );
}

export default Root;
