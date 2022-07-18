import { createContext, useState, useEffect } from 'react';
import {onAuthStateChangeListener, createUserDocFromAuth } from '../utils/firebase/firebase.utils.js'


//value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

//provider
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser ] = useState(null)
  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}
