
import React, { createContext, useState } from 'react';

// Create a Context
export const ThemeContext = createContext();

// Create a Provider component
export const Provider = ({ children }) => {
 
    const [isAdmin,setIsAdmin]=useState(false)
    const [loading,setLoading]=useState(false)
    

  

  return (
    <ThemeContext.Provider value={{setIsAdmin,isAdmin,loading,setLoading}}>
      {children}
    </ThemeContext.Provider>
  );
};
