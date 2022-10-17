import React, { useState } from 'react'
import { useStateContext } from '../../contexts/ContextProvider'
import Navbar from '../navbar'
import Sidebar from './sidebar'

function Layout({ children }: any) {
  const { isSidebar, setIsSidebar } = useStateContext()

  return (
    <div className='relative'>
      <Sidebar />
      <div
        className={`h-screen w-full flex flex-col transition-width duration-300 ease-linear ${
          isSidebar && 'pl-72'
        }`}
      >
        <Navbar />
        <div className='h-full w-full'>{children}</div>
      </div>
    </div>
  )
}

export default Layout
