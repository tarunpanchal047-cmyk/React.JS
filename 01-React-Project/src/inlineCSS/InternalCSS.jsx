//! Internal CSS : -----------
// -------------------
//^ 2. internal CSS : it is defined inside the same file or component using a style tag in jsx
//^  it is used for small components where css not reused everywhere.


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