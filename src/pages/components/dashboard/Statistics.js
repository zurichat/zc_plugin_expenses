/* eslint-disable prettier/prettier */
import React from "react";

const Statistics = ({approved, declined, pending}) => {
    return (
        <div className="d-flex flex-row justify-content-end my-2">
            <p className="mx-2 text-success">
                Approved <span className="mx-1">{approved}</span>
            </p>
            <p className="mx-2 text-danger">
                Declined <span className="mx-1">{declined}</span>
            </p>
            <p className="mx-2 text-secondary">
                Pending <span className="mx-1">{pending}</span>
            </p>
        </div>
    );
};

export default Statistics;
