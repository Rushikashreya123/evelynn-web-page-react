import React, { createContext,useState } from "react";
export  const ThemeContext=createContext();
export const ThemeProvider=({children})=>{
    const [DarkMode, setDarkMode]=useState("light");
   const color = DarkMode==="light"? '#333' :'#fff';
   const backgroundColor= DarkMode==="light"? '#fff':'#333';
   document.body.style.color=color;
   document.body.style.backgroundColor=backgroundColor;
   const toggleTheme=()=>{
    setDarkMode(DarkMode==="light"?"dark":"light")

   }
 return(
    <ThemeContext.Provider value={{toggleTheme , DarkMode}}>
        {children}
    </ThemeContext.Provider>

 );
    
}