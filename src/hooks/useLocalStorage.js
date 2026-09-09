import { useState, useEffect } from 'react'

/**
 * Custom hook that behaves like useState but persists the value to
 * localStorage so it survives page refreshes.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key)
      return stored !== null ? JSON.parse(stored) : initialValue
    } catch (error) {
      console.warn(`Could not read localStorage key "${key}":`, error)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.warn(`Could not write localStorage key "${key}":`, error)
    }
  }, [key, value])

  return [value, setValue]
}