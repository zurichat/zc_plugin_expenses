import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
function CreateExpensesForm() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div class="form-container">
                    <form class="register-form">
                    
                        <input
                            id="first-name"
                            class="form-field"
                            type="text"
                            placeholder="Title"
                            name="firstName"
                        />
                        <input
                            id="last-name"
                            class="form-field"
                            type="text"
                            placeholder="Description"
                            name="lastName"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateExpensesForm;

if (document.getElementById("createExpensesForm")) {
    ReactDOM.render(<CreateExpensesForm />, document.getElementById("createExpensesForm"));
}
