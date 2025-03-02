import React from "react"

import Backdrop from "./components/back-drop"
import AppSidebar from "./components/app-sidebar"
import AppHeader from "./components/app-header"

function Template1({ children }:  React.PropsWithChildren) {
  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
        <Backdrop />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out lg:ml-[290px]`}
      >
        <AppHeader />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Template1