import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDOM from "react-dom";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import View from "./pages/View";
import {useState , useEffect} from 'react';
import { registerApplication, start } from 'single-spa';

registerServiceWorker();
function Index() {
    const url = `${window.location.origin}/api/v1/expenses`
    const [expenses, setExpenses] = useState({
        loading : false,
        data : null,
        error : false
    });
    const userdata={
        id:"613d3e65e4010959c8dc0c11",
        name:"Sally Jane",
        room_id: "6133c5a68006324323416896",
        plugin_id:"613ba9de41f5856617552f51",
        organization_id:"6133c5a68006324323416896",
        isadmin:false
    }
    

    useEffect(() => {
        setExpenses({
            loading : true,
            data : null,
            error : false
        })

        axios.get(url,{
            headers: {
              "Plugin-id" :userdata.plugin_id,
              "Organization-id" :userdata.organization_id,
              "room-id" : userdata.room_id
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
                    <Create userdata={userdata} />
                </Route>
                <Route path="/view">
                    <View userdata={userdata}/>
                </Route>
                <Route path="/">
                    <Dashboard expenses={expenses} setExpenses={setExpenses} userdata={userdata}/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Index;

if (document.getElementById("root")) {
    ReactDOM.render(<Index />, document.getElementById("root"));
}

