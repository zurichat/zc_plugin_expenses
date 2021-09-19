import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDOM from "react-dom";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import View from "./pages/View";

function Index() {
    return (
        <Router>
            <Switch>
                <Route path="/create">
                    <Create />
                </Route>
                <Route path="/view">
                    <View />
                </Route>
                <Route path="/">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    );
}

export default Index;

if (document.getElementById("root")) {
    ReactDOM.render(<Index />, document.getElementById("root"));
}

