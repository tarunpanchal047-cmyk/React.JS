import React from 'react'

const InlineCSS = () => {

  let h1Style = {
    color: "blue",
    fontSize: "80px"
  }
  return (


    <div>
      <h1 style={{color: "red"}}>InlineCSS</h1>
       <h1 style={h1Style}>InlineCSS Example</h1>
       <h1 style={{color: "green"}}>InlineCSS Example</h1>
    </div>
  )
}

export default InlineCSS