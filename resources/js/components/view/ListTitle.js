import React from "react";
export default function ListTitle() {
    return (
        <div className="form-group">
            <label class="font-weight-bold display-4" htmlFor="title">
                Title
            </label>
            <input
                readonly
                type="text"
                className="form-control-plaintext lead"
                id="title"
                placeholder="Expense Title"
                value="Feeding Expense"
            />
        </div>
    );
}
