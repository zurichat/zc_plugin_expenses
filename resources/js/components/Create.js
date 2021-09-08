import React from "react";
import ReactDOM from "react-dom";
import Breadcrumb from "./create/Breadcrumb";
import FormContainer from "./create/FormContainer";

function Index() {
    return (
        <>
            <Breadcrumb />
            <FormContainer />
        </>
    );
}

export default Index;

if (document.getElementById("create")) {
    ReactDOM.render(<Index />, document.getElementById("create"));
}
