import React from 'react';
import ReactDOM from 'react-dom';

function Hello() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">React Component</div>

                        <div className="card-body">I'm an React component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hello;

if (document.getElementById('root')) {
    ReactDOM.render(<Hello />, document.getElementById('root'));
}
