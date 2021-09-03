import React from 'react';
import ReactDOM from 'react-dom';

function User() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Users Component</div>

                        <div className="card-body">I'm an user component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;

if (document.getElementById('user')) {
    ReactDOM.render(<User />, document.getElementById('user'));
}