import React from "react"

function Template2({ children }:  React.PropsWithChildren) {
  return (
    <div>
      <h1>Template 2</h1>

      {children}

    </div>
  )
}

export default Template2