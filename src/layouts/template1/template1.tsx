import React from "react"

function Template1({ children }:  React.PropsWithChildren) {
  return (
    <div>
      <h1>Template 1</h1>

      {children}

    </div>
  )
}

export default Template1