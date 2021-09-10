import React from "react";
import PropTypes from "prop-types";

const External = (props) => {
    return (
        <div>
            <h3>Hello World!!!</h3>
        </div>
    );
};

External.propTypes = {};

export default External;
if (document.getElementById("#external")) {
    ReactDOM.render(<External />, document.getElementById("#external"));
}
