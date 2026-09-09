import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

const ThemeContext = createContext(null)

function themeReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return { mode: state.mode === 'dusk' ? 'daylight' : 'dusk' }
    case 'SET':
      return { mode: action.payload }
    default:
      return state
  }
}

export function ThemeProvider({ children }) {
  const [savedMode, setSavedMode] = useLocalStorage('autovault-theme', 'dusk')
  const [state, dispatch] = useReducer(themeReducer, { mode: savedMode })

  // Keep localStorage in sync whenever the reducer state changes.
  useEffect(() => {
    setSavedMode(state.mode)
    document.documentElement.setAttribute('data-theme', state.mode)
  }, [state.mode, setSavedMode])

  return (
    <ThemeContext.Provider value={{ mode: state.mode, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}