/* eslint-disable prettier/prettier */
import React from "react";
import Dashboard from "./Dashboard";

const Admin = ({ expenses, userdata, setUserdata, setExpenses }) => {
    setUserdata({ ...userdata, isadmin: true });
    return (
        <Dashboard
            expenses={expenses}
            userdata={userdata}
            setExpenses={setExpenses}
        />
    );
};

export default Admin;
