import React from 'react'
import { useStateContext } from '../../contexts/ContextProvider'

function Settingbar(props: any) {
  const { isSettingbar, setIsSettingbar } = useStateContext()

  return (
    <div
      className={`h-screen fixed top-0 right-0 ${
        isSettingbar ? 'w-full' : 'w-0'
      }`}
    >
      <div
        className={`bg-half-transparent h-full w-full transition-all duration-300 ease-in-out ${
          isSettingbar ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className='bg-white h-full w-[25%] ml-auto'></div>
      </div>
    </div>
  )
}

export default Settingbar
