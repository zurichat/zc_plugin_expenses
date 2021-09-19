import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDOM from "react-dom";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import View from "./pages/View";
import {useState , useEffect} from 'react';

function Index() {
    const url = `${window.location.origin}/api/v1/expenses`
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
              "Plugin-id" :"613ba9de41f5856617552f51",
              "Organization-id" :"6133c5a68006324323416896",
              "room-id" : "6133c5a68006324323416896"
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
        <Router basename="/expenses">
            <Switch>
                <Route path="/create">
                    <Create />
                </Route>
                <Route path="/view">
                    <View />
                </Route>
                <Route path="/">
                    <Dashboard expenses={expenses} setExpenses={setExpenses}/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Index;

if (document.getElementById("root")) {
    ReactDOM.render(<Index />, document.getElementById("root"));
}

