//! - Memoization
//     - it is a code optimization technique that makes application more faster and efficient.
//     - It does this by storing computational result in cache and retrieving the same information from the cache.
//     - The next time it's needed, instead of computing it again

//!  - Types of Memoization
// !        1. React.memo
//             - it is a higher order component that memoizes a react component preventing unnecessary re-renders, 
//               if it's prop or state have not changed

import React from 'react'

const MemoChild = () => {
    console.log("child is re-render")
  return (
   <h1>MemoChild</h1>
  )
}

export default React.memo(MemoChild)
