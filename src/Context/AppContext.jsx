import { createContext } from "react";
import { useState } from "react";
export const AppContext=createContext()
export default function AppContextProvider({children}){
    const [state,setState]=useState(false)
    function handleLogin(){
        setState(true)
    }
    function handleLogout(){
        setState(false)
    }
    return(<>
    <AppContext.Provider value={{state,handleLogin,handleLogout,setState}}>
        {children}
    </AppContext.Provider>
    </>
    )
}