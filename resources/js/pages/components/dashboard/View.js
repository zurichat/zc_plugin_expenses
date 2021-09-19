import React from 'react'
import Loader from './Loader'
import Error from './Error'
const View = ({id, userdata}) => {
    let expense={
        loading:true,
        data:null,
        error:false
    }
    const url = `${window.location.origin}/api/v1/expenses/${id}`
    axios.get(url, {
        headers: {
            "Plugin-id": userdata.plugin_id,
            "Organization-id": userdata.organization_id,
            "room-id": userdata.room_id
        }
    })
        .then(response => {
            console.log(response.data.data.data)
            expense.loading =false
            expense.data= response.data.data.data
            expense.error= false
        })
        .catch(error => {
            console.log(error);
            expense.loading = false
            expense.data = null
            expense.error = true
        })
    return (
        <div className="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Expenses List</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                            {expense.loading ? <Loader /> : expense.error ? <Error /> : <>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Title</p>
                                <p>{expense.data.title}</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>{}</p>
                                <p>To-Admin</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Title</p>
                                <p>Transport</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Type</p>
                                <p>Logistics</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Price</p>
                                <p>{price}</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center text-success">
                                <p>Status</p>
                                <p>{status}</p>
                            </div>
                            </>  
                            }
                        
                    </div>
                    <div className="modal-footer d-flex justify-content-around">
                        <button className="btn btn-sm btn-link text-primary"><i className="fas fa-download"></i> Export Receipt</button>
                        <button className="btn btn-sm btn-link text-primary"><i className="fas fa-file"></i>  Receipt</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View
