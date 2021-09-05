import React from 'react';
import ReactDOM from 'react-dom';
function DashboardTable() {
    //@GoldenDev #177
    return (
        <div>
           <div className="table-responsive">
                    <table className="table">
                        <tbody className="table-head">
                            <tr>
                            <td >DATE</td>
                            <td>USER ID </td>
                            <td>NAME</td>
                            <td>PRODUCTS</td>
                            <td>PRICE</td>
                            <td>DETAILS</td>
                            </tr>
                        </tbody>
                        <tbody className="bg-light">
                            <tr>
                            <td>12/12/2021</td>
                            <td>2892390810</td>
                            <td>Bukola Adeniyi</td>
                            <td>Notebooks</td>
                            <td>N5000</td>
                            <td ><a href="#" className="btn-link">View Details</a></td>
                            </tr>
                            <tr>
                            <td>12/12/2021</td>
                            <td>2892390810</td>
                            <td>Bukola Adeniyi</td>
                            <td>Notebooks</td>
                            <td>N5000</td>
                            <td ><a href="#" className="btn-link">View Details</a></td>
                            </tr>
                            <tr>
                            <td>12/12/2021</td>
                            <td>2892390810</td>
                            <td>Bukola Adeniyi</td>
                            <td>Notebooks</td>
                            <td>N5000</td>
                            <td ><a href="#" className="btn-link">View Details</a></td>
                            </tr>
                            <tr>
                            <td>12/12/2021</td>
                            <td>2892390810</td>
                            <td>Bukola Adeniyi</td>
                            <td>Notebooks</td>
                            <td>N5000</td>
                            <td ><a href="#" className="btn-link">View Details</a></td>
                            </tr>
                            <tr>
                            <td>12/12/2021</td>
                            <td>2892390810</td>
                            <td>Bukola Adeniyi</td>
                            <td>Notebooks</td>
                            <td>N5000</td>
                            <td ><a href="#" className="btn-link">View Details</a></td>
                            </tr>
                            <tr>
                            <td>12/12/2021</td>
                            <td>2892390810</td>
                            <td>Bukola Adeniyi</td>
                            <td>Notebooks</td>
                            <td>N5000</td>
                            <td ><a href="#" className="btn-link">View Details</a></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
        </div>
    );
}

export default DashboardTable;

if (document.getElementById('dbtable')) {
    ReactDOM.render(<DashboardTable />, document.getElementById('dbtable'));
} 