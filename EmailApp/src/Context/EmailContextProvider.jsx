import { createContext } from "react"

export const EmailContext = createContext();
export const EmailContextProvider =({children})=>{
    return(
        <div>
        <EmailContext.Provider value={{item:4}}>
            {children}
        </EmailContext.Provider>
        </div>
    )
}