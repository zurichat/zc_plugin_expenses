import React from 'react'

const View = ({title}) => {
    return (
        <div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Expenses List</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                
                <div class="modal-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <p>{title}</p>
                        <p>#21373</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <p>{author_name}</p>
                        <p>To-Admin</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <p>Title</p>
                        <p>Transport</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <p>Type</p>
                        <p>Logistics</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <p>Price</p>
                        <p>{price}</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center text-success">
                        <p>Status</p>
                        <p>{status}</p>
                    </div>

                </div>
                <div class="modal-footer d-flex justify-content-around">
                    <button class="btn btn-sm btn-link text-primary"><i class="fas fa-download"></i> Export Receipt</button>
                    <button class="btn btn-sm btn-link text-primary"><i class="fas fa-file"></i>  Receipt</button>
                </div>
                </div>
            </div>
    </div>
    )
}

export default View
