import React from 'react'

const statistics = () => {
  return (
    <div className='d-flex flex-row'>
      <p className='m-2 text-success'>Approved <span>5</span></p>
      <p className='m-2 text-danger'>Declined <span>5</span></p>
      <p className='m-2 text-secondary'>Pending <span>5</span></p>
    </div>
  )
}

export default statistics
