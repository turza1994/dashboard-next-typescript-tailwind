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

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        isSidebar,
        setIsSidebar,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
