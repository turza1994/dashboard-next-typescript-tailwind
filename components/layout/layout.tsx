import React, { useState } from 'react'
import { useStateContext } from '../../contexts/ContextProvider'
import Navbar from './navbar'
import Sidebar from './sidebar'
import { FiSettings } from 'react-icons/fi'
import Settingbar from './settingbar'

function Layout({ children }: any) {
  const { isSidebar, setIsSidebar, isSettingbar, setIsSettingbar } =
    useStateContext()

  return (
    <div className='relative bg-main-bg dark:bg-main-dark-bg dark:text-white text-gray-600'>
      <Sidebar />
      <div
        className={`h-screen w-full flex flex-col transition-width duration-300 ease-linear ${
          isSidebar && 'pl-72'
        }`}
      >
        <Navbar />
        <div className='h-full w-full'>{children}</div>
      </div>

      {/* Theme Setting Start*/}
      <div className='fixed right-4 bottom-4 z-10'>
        <button
          type='button'
          className='text-3xl text-gray-600 dark:text-white p-3 rounded-full hover:drop-shadow-xl hover:bg-light-gray'
          onClick={() => setIsSettingbar(!isSettingbar)}
        >
          <FiSettings />
        </button>
      </div>
      <Settingbar />
      {/* Theme Setting End*/}
    </div>
  )
}

export default Layout
