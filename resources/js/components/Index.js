import React from "react";
import ReactDOM from "react-dom";
import Expenses from "./Expenses";
// @patutechz issue #51
function Index() {
    return (
        <div>
            <Expenses />
        </div>
    );
}

export default Index;

if (document.getElementById("root")) {
    ReactDOM.render(<Index />, document.getElementById("root"));
}
// @patutechz issue #51
