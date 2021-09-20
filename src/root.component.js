import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import View from "./pages/View";
import axios from "axios";
import "./css/app.css";
import "./css/style.css";
function Root() {
    const url = `$https://expenses.zuri.chat/api/v1/expenses`;
    const [expenses, setExpenses] = useState({
        loading: false,
        data: null,
        error: false,
    });
    const [userdata] = useState({
        id: "613d3e65e4010959c8dc0c11",
        name: "Sally Jane",
        room_id: "6133c5a68006324323416896",
        plugin_id: "613ba9de41f5856617552f51",
        organization_id: "6133c5a68006324323416896",
        isadmin: false,
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
                    data: response.data.data.data,
                    error: false,
                });
            })
            .catch((error) => {
                setExpenses({
                    loading: false,
                    data: null,
                    error: true,
                });
            });
    }, [url]);
    return (
        <Router basename="/expenses">
            <Switch>
                <Route path="/create">
                    <Create userdata={userdata} />
                </Route>
                <Route path="/view">
                    <View userdata={userdata} />
                </Route>
                <Route path="/">
                    <Dashboard
                        expenses={expenses}
                        setExpenses={setExpenses}
                        userdata={userdata}
                    />
                </Route>
            </Switch>
        </Router>
    );
}

export default Root;
