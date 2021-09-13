import React from "react";
import FormItemElement from "./FormItemElement";
import FormTitleElement from "./FormTitleElement";
import FormDescriptionElement from "./FormDescriptionElement";
import FormCreateElement from "./FormCreateElement";
import FormCancelElement from "./FormCancelElement";
export default function FormContainer(props) {
    return (
        <div className="container-fluid mb-6">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 p-0 m-0">
                    <div className="card rounded-0">
                        <div className="card-header custom-card-header py-3">
                            Create Expense List
                        </div>
                        <div className="card-body">
                            <form method="post" action="">
                                <FormTitleElement />
                                <FormItemElement />
                                <FormDescriptionElement />
                                <div className="form-row">
                                    <FormCreateElement />
                                    <FormCancelElement />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
