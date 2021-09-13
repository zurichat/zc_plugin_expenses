import React from "react";
export default function ListStatus() {
    return (
        <div className="form-group">
            <label class="font-weight-bold display-4" htmlFor="title">
                Status
            </label>
            <input
                readonly
                type="text"
                className="form-control-plaintext text-success lead"
                id="title"
                placeholder="Expense Title"
                value="Approved"
            />
        </div>
    );
}
