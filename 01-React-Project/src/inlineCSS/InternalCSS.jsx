import React from 'react'

const InternalCSS = () => {
  return (
    <div>
      <style>
        {
          `
          .example1{
          color: red;
          font-size : 80px;
          padding: 20px;
          background-color: black;
          }
          `
        }
      </style>
      <h1 className='example1'>InternalCSS</h1>
    </div>
  )
}

export default InternalCSS