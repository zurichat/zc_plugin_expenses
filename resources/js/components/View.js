import React from "react";
import ReactDOM from "react-dom";
import ItemTable from "./view/ItemTable";
import ListBackButton from "./view/ListBackButton";
import ListDescription from "./view/ListDescription";
import ListStatus from "./view/ListStatus";
import ListTitle from "./view/ListTitle";
import ViewNav from "./view/ViewNav";

function Index() {
    return (
        <>
            <ViewNav />
            <div className="container-fluid mb-6">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 p-0 m-0">
                        <div className="card rounded-0">
                            <div className="card-header custom-card-header py-3">
                                View Expense List
                            </div>
                            <div className="card-body">
                                <form>
                                    <ListTitle />
                                    <ItemTable />
                                    <ListStatus />
                                    <ListDescription />
                                    <ListBackButton />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;

if (document.getElementById("view")) {
    ReactDOM.render(<Index />, document.getElementById("view"));
}
