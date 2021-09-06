import React from 'react';
import ReactDOM from 'react-dom';



function Example() {
  constructor(props) 
    super(props);
    this.state = {value: '', value: '' };
   

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) 
    this.setState({value: event.target.value});
  

  handleSubmit(event) 
    alert('A form was submitted: ' + this.state.value);
    event.preventDefault();
  

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header"><h1>New Expense</h1></div>

                        <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                           <label>Name</label>
                           <input type="text" value={this.state.value} onChange={this.handleChange} />
                           <label>description</label>
                           <textarea name ="description" value={this.state.value} onChange={this.handleChange}></textarea>
                       </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
