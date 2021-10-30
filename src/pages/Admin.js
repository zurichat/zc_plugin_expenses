/* eslint-disable prettier/prettier */
import React from "react";
import Dashboard from "./Dashboard";

const Admin = ({ expenses, userdata, url,setUrl }) => {
    return (
        <Dashboard
            expenses={expenses}
            userdata={{...userdata,isadmin:true}}
            setUrl={setUrl}
            url={url}
        />
    );
};

export default Admin;
