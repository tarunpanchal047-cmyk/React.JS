import React from 'react'

const UseCallbackChild = () => {
    console.log("Component is Re-render")
  return (
    <h1>
      UseMemoChild
    </h1>
  )
}

export default React.memo(UseCallbackChild)
