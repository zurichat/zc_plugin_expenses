import React from "react";
export default function FormTitleElement(props) {
    return (
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
                type="text"
                className="form-control"
                value="Utilities" disabled="disabled"
            />
        </div>
    );
}
