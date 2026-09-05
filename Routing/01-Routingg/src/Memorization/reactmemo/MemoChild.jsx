import React from 'react'

const MemoChild = () => {
    console.log("child is re-render")
  return (
   <h1>MemoChild</h1>
  )
}

export default React.memo(MemoChild)
