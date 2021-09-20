import React from 'react'
import ReactDOM from "react-dom";
import PropTypes from 'prop-types'
import Description from './external/Description';
import Features from './external/Features';
import Permissions from './external/Permissions';
import Security from './external/Security';
import Info from './external/Info';

const External = props => {
    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <Info/>
                </div>
                <div className="col-md-9">
                    <h1>Expense Lists</h1>
                    <nav>
                        <div className="nav my-nav" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="nav-description-tab" data-toggle="tab" href="#nav-description" role="tab" aria-controls="nav-description" aria-selected="true">Description</a>
                            <a className="nav-item nav-link" id="nav-features-tab" data-toggle="tab" href="#nav-features" role="tab" aria-controls="nav-features" aria-selected="false">Features</a>
                            <a className="nav-item nav-link" id="nav-permissions-tab" data-toggle="tab" href="#nav-permissions" role="tab" aria-controls="nav-permissions" aria-selected="false">Permissions</a>
                            <a className="nav-item nav-link" id="nav-security-tab" data-toggle="tab" href="#nav-security" role="tab" aria-controls="nav-security" aria-selected="false">Security&nbsp;&&nbsp;Compliance</a>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <Description><h2>Trying Somthing else</h2></Description>
                        <Features/>
                        <Permissions/>
                        <Security/>
                    </div>

                </div>
            </div>
        </>
    )
}

External.propTypes = {

}

export default External
if(document.getElementById("external")){
    ReactDOM.render(<External/>,document.getElementById("external"));
    console.log("connected");
}
console.log("connected");