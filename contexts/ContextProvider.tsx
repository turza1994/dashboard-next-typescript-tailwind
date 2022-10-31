import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext<any>(null)

const initialNavItems = {
  isCart: false,
  isChat: false,
  isNotification: false,
  isProfile: false,
}

export const ContextProvider = ({ children }: any) => {
  const [isSidebar, setIsSidebar] = useState(true)
  const [isSettingbar, setIsSettingbar] = useState(false)
  const [currentColor, setCurrentColor] = useState('#aaa')
  const [currentMode, setCurrentMode] = useState('light')

  const setMode = (e: any) => {
    setCurrentMode(e.target.value)
    localStorage.setItem('themeMode', e.target.value)
  }

  const setColor = (color: any) => {
    setCurrentColor(color)
    localStorage.setItem('colorMode', color)
  }

  return (
    <StateContext.Provider
      value={{
        isSidebar,
        setIsSidebar,
        isSettingbar,
        setIsSettingbar,
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
